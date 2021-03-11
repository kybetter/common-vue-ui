# 文本省略组件 Ellipsis

> 适用于单行或者多行文本的末尾需要有省略号的情况

```html
<!-- 单行 -->
<c-ellipsis :html="htmlData" :rows="1"></c-ellipsis>
<!-- 如果需要行内展示，需自行设置 -->
<c-ellipsis style="display: inline-block;" :text="textData" :rows="1"></c-ellipsis>
<!-- 多行 -->
<c-ellipsis :text="textData" :rows="4"></c-ellipsis>
```