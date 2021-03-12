# common-vue-ui

**一款面向 C 端的 PC 组件库**

### 文档

[查看文档](https://kybetter.gitee.io/cui-pages/)

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
