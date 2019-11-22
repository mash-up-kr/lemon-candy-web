const _ = require('lodash');
const colorSet = require('./hex');
const fs = require('fs');
const package = require('./package.json');
const path = require('path');

const generateColorsDefinition = (moduleName, colors, fileName) => {
  const colorDefinitions = _.map(colors, (colors, name) => (
      `  const ${name}: string;`
  )).join('\n');

  const data = `\
declare module '${moduleName}' {
${colorDefinitions}
}
`;

  fs.writeFileSync(path.join(__dirname, fileName), data);

  console.log(`- Generated ${fileName}`);
};

generateColorsDefinition(package.name, colorSet, 'index.d.ts');

console.log('Build finished!');
