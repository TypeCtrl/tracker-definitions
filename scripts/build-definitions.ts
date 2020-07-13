import del from 'del';
import fs from 'fs';
import * as yaml from 'js-yaml';
import { camelCase, isObjectLike } from 'lodash';
import path from 'path';
import prettier from 'prettier';

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
  printWidth: 100,
  arrowParens: 'avoid',
};

const bangSrcSelector = /src=\\+'\(.+\)\\+'/gmi;
// eslint-disable-next-line no-useless-escape
const bangSrcSelectorFix = `src=\\\"(.*?)\\\"`;

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

  // meh maybe make pr to jackett removing this
  if (lang === 'us-EN') {
    lang = 'en-US';
  }

  json.language = lang;

  // parse and normalize categories
  if (isObjectLike(json.caps.categories)) {
    const mappings = Object.keys(json.caps.categories).map(n => {
      return { id: n, cat: json.caps.categories[n] };
    });
    json.caps.categorymappings = mappings;
  }

  delete json.caps.categories;

  if (Array.isArray(json.caps.categorymappings)) {
    json.caps.categorymappings = json.caps.categorymappings.map(cat => {
      const l = cat.cat.toLowerCase().replace(' ', '');
      const f = cats.find(n => n.toLowerCase().replace(' ', '') === l);
      if (f === undefined) {
        console.error(cat.cat);
        throw new Error(cat.cat);
      }

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      cat.id = `${cat.id}`;
      cat.cat = f || cat.cat;
      return cat;
    });
  }

  // parse and normalize search.paths
  // some are search.path some are search.paths
  // always return array
  if (json.search?.path) {
    json.search.paths = [{ path: json.search.path }];
    delete json.search.path;
  }

  return json;
}

const skip: string[] = [];

for (const src of SOURCES) {
  const files = fs.readdirSync(src.dir);
  // list of sites available
  const sites: string[] = [];

  const jsonOutDir = path.join(__dirname, `../src/json/${src.name}`);
  const moduleOutDir = path.join(__dirname, `../src/${src.name}`);
  // cleanup dir
  del.sync(jsonOutDir);
  fs.mkdirSync(jsonOutDir);
  del.sync(moduleOutDir);
  fs.mkdirSync(moduleOutDir);

  for (const file of files) {
    const name = file.replace('.yml', '').toLowerCase();
    if (skip.includes(name)) {
      continue;
    }

    console.log(name, file);
    let content = fs.readFileSync(path.join(src.dir, file), 'utf8');

    // fixes before parsing yml
    content = content.replace(bangSrcSelector, bangSrcSelectorFix.toString());

    const json = yaml.load(content, { json: true });
    const fixedJson = validateJson(json);
    fixedJson.source = src.name;

    sites.push(name);

    // write json
    const formattedJson = prettier.format(JSON.stringify(fixedJson), { parser: 'json' });
    fs.writeFileSync(path.join(jsonOutDir, `${name}.json`), formattedJson);

    // write module
    const defExp = `
      import { TrackerDefinition } from '../definition-interface';

      export const definition: TrackerDefinition = ${formattedJson};
    `;
    fs.writeFileSync(
      path.join(moduleOutDir, name + '.ts'),
      prettier.format(defExp, PRETTIER_TYPESCRIPT),
    );
  }

  // helpers
  const formattedSites = prettier.format(JSON.stringify(sites), { parser: 'json' });
  const siteExp = `export const ${src.name}Sites = ${formattedSites};`;
  fs.writeFileSync(
    path.join(HELPERS_DIR, `${src.name}.ts`),
    prettier.format(siteExp, PRETTIER_TYPESCRIPT),
  );

  // site export
  let exportedSites = sites.reduce((pre, cur) => {
    const name = `${src.name[0]}${src.name[0]}${camelCase(cur)}`;
    return `${pre}
      import {definition as ${name}} from './${cur}';
      export const ${name.substring(1)} = ${name};
    `;
  }, '');
  exportedSites += `
    export const definitions = [${sites
    .map(n => `${src.name[0]}${src.name[0]}${camelCase(n)}`)
    .toString()}];
  `;
  fs.writeFileSync(
    path.join(moduleOutDir, `index.ts`),
    prettier.format(exportedSites, PRETTIER_TYPESCRIPT),
  );
}
