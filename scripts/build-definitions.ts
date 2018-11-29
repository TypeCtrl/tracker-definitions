import fs from 'fs';
import * as yaml from 'js-yaml';
import path from 'path';
import prettier from 'prettier';
import rimraf from 'rimraf';

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
  printWidth: 100,
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
};

const HELPERS_DIR = path.join(__dirname, `../src/helpers`);

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
    sites.push(json.site);

    // write json
    const formattedJson = prettier.format(JSON.stringify(json), { parser: 'json' });
    fs.writeFileSync(path.join(jsonOutDir, name + '.json'), formattedJson);

    // write module
    const defExp = `
      export const definition: any = ${formattedJson};
    `;
    fs.writeFileSync(
      path.join(moduleOutDir, name + '.ts'),
      prettier.format(defExp, PRETTIER_TYPESCRIPT),
    );
  }
  // todo helpers

  const formattedSites = prettier.format(JSON.stringify(sites), { parser: 'json' });
  const siteExp = `export const sites: string[] = ${formattedSites};`;
  fs.writeFileSync(
    path.join(HELPERS_DIR, `${src.name}.ts`),
    prettier.format(siteExp, PRETTIER_TYPESCRIPT),
  );
}
