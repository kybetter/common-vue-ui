# common-vue-ui

**一款面向 C 端的 PC 组件库**

### 文档

[查看文档](https://kybetter.gitee.io/cui-pages/)

### 安装
```bash
$ yarn add common-vue-ui
```
### 使用

#### 全部引用

```js
import CUI from 'common-vue-ui';
// 必须的基础样式（包括了 row、col、ellipsis 等基础组件的样式）
import 'common-vue-ui/lib/styles/index.css';
// 可以引入全部组件的默认的样式
// import 'common-vue-ui/lib/styles/default-theme.css';
// 也可以单独引用某个组件的默认样式
// import 'common-vue-ui/lib/styles/button.css';
// 再引入你自定义的组件样式
// import 'your-theme.css'

Vue.use(CUI);
```
