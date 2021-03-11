const path = require('path');
// const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
    // new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             [
      //               'autoprefixer',
      //             ]
      //           ]
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)(\?.*)?$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8192,
      //       fallback: {
      //         loader: 'file-loader',
      //         options: {
      //           name: 'assets/[name].[hash:8].[ext]'
      //         }
      //       }
      //     }
      //   }]
      // },
    ]
  }
};
