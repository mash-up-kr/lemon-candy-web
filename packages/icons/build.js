const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const iconFileNames = fs.readdirSync('svgs').filter(name => /\.svg$/.test(name));

const getModuleName = fileName => {
  const moduleName = _.camelCase(path.basename(fileName, '.svg'));
  return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
};

const generateIcons = fileNames => {
  const data = fileNames.map(fileName => (
    `export { default as ${getModuleName(fileName)} } from './svgs/${fileName}';`
  )).join('\n') + '\n';

  fs.writeFileSync('index.js', data);

  console.log('- Generated index.js');
};

const generateIconsDefinition = fileNames => {
  const data = fileNames.map(fileName => (
    `export const ${getModuleName(fileName)}: any;`
  )).join('\n') + '\n';

  fs.writeFileSync('index.d.ts', data);

  console.log('- Generated index.d.ts');
};

generateIcons(iconFileNames);
generateIconsDefinition(iconFileNames);

console.log('Build finished!');
