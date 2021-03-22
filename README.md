# common-vue-ui

**一款面向 C 端的 PC 组件库**

### 文档

[查看文档（github）](https://kybetter.github.io/common-vue-ui/)

[查看文档（gitee）](https://kybetter.gitee.io/common-vue-ui)

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
// 基础样式[可选]，包含重置和工具样式
import 'common-vue-ui/lib/styles/base.css';
// 全部组件样式[可选]
import 'common-vue-ui/lib/styles/default-theme.css';
// 也可以单独引用某个组件的默认样式，比如按钮组件
// import 'common-vue-ui/lib/styles/button.css';
// 再引入你想要覆盖的自定义的组件样式
// import 'your-theme.css'

Vue.use(CUI);
```
