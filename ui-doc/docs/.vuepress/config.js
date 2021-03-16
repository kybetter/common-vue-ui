module.exports = {
  title: 'common-vue-ui',
  description: '一款面向 C 端的 vue 组件库',
  base: '/common-vue-ui/',
  dest: '../docs',
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kybetter/common-vue-ui' }
    ],
    sidebar: [
      '/guide',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/grid',
          '/components/button',
          '/components/ellipsis',
          '/components/affix'
        ]
      }
    ]
  },
  configureWebpack: (config, isServer) => {
    // if (!isServer) {
    return {
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader'
            ]
          }
        ]
      }
    };
    // }
  }
};
