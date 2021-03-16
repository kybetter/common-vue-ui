const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');

process.env.NODE_ENV = 'production';

const components = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'components'));

let entries = {};
components.forEach(component => {
  entries[component] = path.join(__dirname, '..', 'src', 'components', component, 'index.js');
});

module.exports = merge(webpackBaseConfig, {
  mode: process.env.NODE_ENV,
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'cui',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
});
