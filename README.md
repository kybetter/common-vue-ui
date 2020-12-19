# common-vue-ui

**一款面向 C 端的无样式 PC 组件库**

> 设计初衷：因为面向 C 端的应用样式各异，没有一个统一的定式，所以在选用组件库时，很难找到既兼容 IE 又符合你产品样式的组件库，很多时候我们只能自己重复造轮子。所以才想着造一个不依赖于组件内置样式的组件库，以便大家方便自定义样式。会提供一个默认样式，方便大家参考修改。

### 安装
```bash
$ yarn add common-vue-ui
```

### 使用
```js
import CUI from 'common-vue-ui';
// 必须的基础样式（包括了 row、col 等基础布局组件的样式）
import 'common-vue-ui/lib/styles/index.css';
// 可以引入全部组件的默认的样式
// import 'common-vue-ui/lib/styles/default-theme.css';
// 也可以单独引用某个组件的默认样式
// import 'common-vue-ui/lib/styles/button.css';
// 再引入你自定义的组件样式
// import 'your-theme.css'

Vue.use(CUI);
```

### 全局字体、重置样式和工具样式

> 项目中有一个基础样式文件，用于重置样式，也含有一些工具样式，它已被集合在 `index.css` 中，当然你也可以单独使用它：

```js
import 'common-vue-ui/lib/styles/global.css';
```

**字体**

根据苹果系统优先和非衬线字体优先的原则，给 body 定义的字体如下，你可以根据自身项目需求来覆盖它:
```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
```

**提供的工具样式有：**

- clearfix 清除浮动
- base-shadow 基础投影，值：`box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)`
- light-shadow 浅色投影，值：`box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)`

使用示例：
```html
<div class="clearfix base-shadow"></div>
```

### 组件

#### 栅格组件 row & col

```html
<c-row :gutter="10">
  <c-col :span="8">common-vue-ui</c-col>
  <c-col :span="8">common-vue-ui</c-col>
  <c-col :span="8">common-vue-ui</c-col>
  <c-col :span="3" :pull="3">common-vue-ui</c-col>
  <c-col :span="3" :push="2">common-vue-ui</c-col>
</c-row>
```

#### 按钮组件 button

```html
<c-button>默认按钮</c-button>
<c-button type="primary">确认按钮</c-button>
<c-button type="text">文字按钮</c-button>
<c-button disabled type="primary">禁用按钮</c-button>
<c-button loading type="primary">加载中...</c-button>
<!-- 预先提供了 size 属性，值需自己定义，没有提供默认样式，需自己写，只需要调整 padding 值即可，样式会以：“c-button--” 为前缀，比如：c-button--small -->
<c-button size="small" type="primary">调整按钮大小</c-button>

```
