# 固钉 Affix

> 常用于漂浮广告，回到首页，只提供了基本的固定功能，其它样式需自定义，可以传入 top、left、right、bottom 这四个属性

```html
<c-affix right="20px" bottom="20px" style="width: 50px; height: 50px;" @click="handleClick">
  <span>固钉组件</span>
</c-affix>

<c-affix top="20px" left="20px" style="width: 50px; height: 50px;">
  <span>固钉组件</span>
</c-affix>
```