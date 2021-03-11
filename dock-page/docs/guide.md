# 指南

**一款面向 C 端的 PC 组件库**

> 设计初衷：因为面向 C 端的应用样式各异，没有一个统一的定式，所以在选用组件库时，很难找到既兼容 IE 又符合你产品样式的组件库，很多时候我们只能自己重复造轮子。所以才想着造一个不依赖于组件内置样式的组件库，以便大家方便自定义样式。会提供一个默认样式，方便大家参考修改。

## 安装
```bash
$ yarn add common-vue-ui
```

## 使用

> 组件的样式均以`c-`开头，如需自定义样式，请到 `common-vue-ui/lib/styles` 中查看对应组件的默认样式，以便修改。

```js
import CUI from 'common-vue-ui';
// 必须的基础样式（包括了 row、col、ellipsis 等无特定样式的基础组件的样式）
import 'common-vue-ui/lib/styles/index.css';
// 可选，引入全部组件的默认的样式
// import 'common-vue-ui/lib/styles/default-theme.css';
// 也可以单独引用某个组件的默认样式，比如按钮组件
// import 'common-vue-ui/lib/styles/button.css';
// 再引入你想要覆盖的自定义的组件样式
// import 'your-theme.css'

Vue.use(CUI);
```

## 全局字体、重置样式和工具样式

> 项目中有一个基础样式文件，用于重置样式，也含有一些工具样式，它已被集合在 `index.css` 中，当然你也可以单独使用它：

```js
import 'common-vue-ui/lib/styles/global.css';
```

### 字体

根据苹果系统优先和非衬线字体优先的原则，给 `<body>` 标签定义的默认字体如下，你可以根据自身项目需求来覆盖它:
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
```

### 提供的工具样式

- 清除浮动：`c-clearfix`
- 阴影：`c-shadow-sm`，`c-shadow`，`c-shadow-lg`，`c-shadow-xl`，`c-shadow-2xl`

使用示例：
```html
<div class="c-clearfix c-shadow"></div>
```
