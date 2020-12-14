# common-vue-ui

**一款兼容 ie9+ 的面向 C 端的无样式 PC 组件库**

> 设计思想，因为面向 C 端的应用样式各异，没有一个统一的定式，所以在选用组件库时，很难找到既兼容 ie 又符合你产品样式的组件库，很多时候我们只能自己重复造轮子。所以才想着造一个不指定样式的组件库，以便大家方便自定义样式。我会默认提供一个简单的样式。

### 安装
```bash
$ yarn add common-vue-ui
```

### 使用
```js
import CUI from 'common-vue-ui';
// 必须的基础样式
import 'common-vue-ui/lib/styles/index.css';
// 在这里引入自定义组件样式;
// import 'common-vue-ui/lib/styles/default-theme.css';

Vue.use(CUI);
```

### 组件

#### 栅格组件 row & col

```html
<c-row :gutter="10">
  <c-col :span="8">common-vue-ui</c-col>
  <c-col :span="8">common-vue-ui</c-col>
  <c-col :span="8">common-vue-ui</c-col>
</c-row>
```
