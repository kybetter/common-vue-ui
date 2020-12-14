const path = require('path');
const components = require('./src/components/index');

let entries = {};
Object.keys(components).forEach(key => {
  entries[key] = path.join(__dirname, 'src', components[key]);
});

const isComponentsMode = process.env.VUE_APP_MODE === 'components';

const outputDir = path.resolve(__dirname, 'lib');

module.exports = {
  outputDir,
  productionSourceMap: false,
  configureWebpack: config => {
    if (isComponentsMode) {
      config.entry = entries;
      config.output.filename = '[name].js';
      config.output.chunkFilename = '[id].js';
      config.output.libraryTarget = 'umd';
      config.output.umdNamedDefine = true;
    }
  },
  pages: {
    dev: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
};
