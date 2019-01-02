import fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';
import prettier from 'prettier';
import rimraf from 'rimraf';
import * as _ from 'lodash';
import { TORZNAB_CATEGORIES } from '../src/categories';

const SOURCES = [
  {
    dir: path.join(__dirname, '../upstream/jackett/src/Jackett.Common/Definitions/'),
    name: 'jackett',
  },
  {
    dir: path.join(__dirname, '../upstream/cardigann/definitions/'),
    name: 'cardigann',
  },
];

const PRETTIER_TYPESCRIPT: prettier.Options = {
  parser: 'typescript',
  trailingComma: 'all',
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
};

const HELPERS_DIR = path.join(__dirname, `../src/helpers`);

const cats = Object.keys(TORZNAB_CATEGORIES);

function validateJson(json: any): any {
  // parse encoding
  json.encoding = json.encoding ? json.encoding.toUpperCase() : 'UTF-8';

  // parse lang
  let lang: string = json.language;
  if (lang.includes('-')) {
    const [l, r] = lang.split('-');
    lang = `${l.toLowerCase()}-${r.toUpperCase()}`;
  } else {
    lang = `${lang}-${lang.toUpperCase()}`;
  }
  // TODO: make pr to jackett removing this
  if (lang === 'us-EN') {
    lang = 'en-US';
  }
  json.language = lang;

  // parse categories
  if (json.caps.categorymappings) {
    json.caps.categorymappings = json.caps.categorymappings.map(cat => {
      const l = cat.cat.toLowerCase().replace(' ', '');
      const f = cats.find(n => n.toLowerCase().replace(' ', '') === l);
      if (!f) {
        console.error(cat.cat);
        throw new Error(cat.cat);
      }
      cat.cat = f || cat.cat;
      return cat;
    });
  } else {
    console.log('ERR', json.site, json.caps)
  }

  return json;
}

for (const src of SOURCES) {
  const files = fs.readdirSync(src.dir);
  // list of sites available
  const sites: string[] = [];

  const jsonOutDir = path.join(__dirname, `../src/json/${src.name}`);
  const moduleOutDir = path.join(__dirname, `../src/${src.name}`);
  // cleanup dir
  rimraf.sync(jsonOutDir);
  fs.mkdirSync(jsonOutDir);
  rimraf.sync(moduleOutDir);
  fs.mkdirSync(moduleOutDir);

  for (const file of files) {
    const name = file.replace('.yml', '').toLowerCase();
    console.log(name, file);
    const content = fs.readFileSync(path.join(src.dir, file), 'utf8');
    const json = yaml.safeLoad(content, { json: true });
    const fixedJson = validateJson(json);

    sites.push(name);

    // write json
    const formattedJson = prettier.format(JSON.stringify(fixedJson), { parser: 'json' });
    fs.writeFileSync(path.join(jsonOutDir, name + '.json'), formattedJson);

    // write module
    const defExp = `
      import { TopLevel } from '../definition-interface';
      export const definition: TopLevel = ${formattedJson};
    `;
    fs.writeFileSync(
      path.join(moduleOutDir, name + '.ts'),
      prettier.format(defExp, PRETTIER_TYPESCRIPT),
    );
  }

  // helpers
  const formattedSites = prettier.format(JSON.stringify(sites), { parser: 'json' });
  const siteExp = `export const sites: string[] = ${formattedSites};`;
  fs.writeFileSync(
    path.join(HELPERS_DIR, `${src.name}.ts`),
    prettier.format(siteExp, PRETTIER_TYPESCRIPT),
  );

  // site export
  const exportedSites = sites.reduce((pre, cur) => {
    return `${pre}export {definition as ${src.name[0]}${_.camelCase(cur)}} from './${cur}';`;
  }, '');
  fs.writeFileSync(
    path.join(moduleOutDir, `index.ts`),
    prettier.format(exportedSites, PRETTIER_TYPESCRIPT),
  );
}
