# 指南

**一款面向 C 端的 PC 组件库**

> 设计初衷：因为面向 C 端的应用样式各异，没有一个统一的定式，所以在选用组件库时，很难找到既兼容 IE 又符合你产品样式的组件库，很多时候我们只能自己重复造轮子。所以才想着造一个不依赖于组件内置样式的组件库，以便大家方便自定义样式。文档中会提供一个默认样式的参考，方便大家修改。

## 安装
```bash
$ npm install common-vue-ui
```

## 使用

### 完整引入

```js
// 引入组件
import CUI from 'common-vue-ui';
// 引入样式
// 必须的基础样式（包括了 row、col、ellipsis 等无特定样式的基础组件样式）
import 'common-vue-ui/lib/styles/index.css';
// 可选，引入全部有特定样式的组件样式
import 'common-vue-ui/lib/styles/default-theme.css';
// 也可以单独引用某个组件的默认样式，比如按钮组件
// import 'common-vue-ui/lib/styles/button.css';
// 再引入你想要覆盖的自定义的组件样式
// import 'your-theme.css'

Vue.use(CUI);
```

### 按需引入

借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
$ npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```js
{
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "common-vue-ui",
        styleLibrary: {
          name: 'styles',
          base: false,
          path: '[module].css',
        }
      },
    ],
  ],
};
```

接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：

```js
import Vue from "vue";
import App from "./App.vue";
import { Button } from 'common-vue-ui';

Vue.use(Button);

new Vue({
  render: h => h(App)
}).$mount("#app");

```

完整组件列表和引入方式：

```js
import Vue from 'vue';
import {
  Button,
  Row,
  Col,
  Affix,
  Ellipsis,
  Dropdown,
  DropdownMenu,
} from 'common-vue-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Affix);
Vue.use(Ellipsis);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
```

## 自定义样式

> 每个组件的 class 均以`c-`开头，如需自定义样式，请到 `common-vue-ui/lib/styles` 中查看对应组件的默认样式，以便修改。

### 全局样式、重置样式和工具样式

> 项目中有一个基础样式文件，用于重置样式，也含有一些工具样式，它已被集合在 `index.css` 中，当然你也可以单独使用它：

```js
// 包含所有样式
import 'common-vue-ui/lib/styles/index.css';
// 包含 reset、utils 和工具样式
import 'common-vue-ui/lib/styles/global.css';
// 工具样式，目前包含清除浮动，阴影样式
import 'common-vue-ui/lib/styles/utils.css';
// 重置样式，包含了全局字体的设置
import 'common-vue-ui/lib/styles/reset.css';
```

### 字体

根据苹果系统优先和非衬线字体优先的原则，给 `<body>` 标签定义的默认字体如下，你可以根据自身项目需求来覆盖它:
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
```

### utils.css 提供的工具样式

- 清除浮动：`c-clearfix`。示例：`<div class="c-clearfix"></div>`
- 阴影：`c-shadow-sm`，`c-shadow`，`c-shadow-lg`，`c-shadow-xl`，`c-shadow-2xl`。示例：`<div class="c-shadow"></div>`
