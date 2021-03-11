# 按钮组件 Button

> 提供了默认的按钮样式，你可以自定义

按钮的默认样式位置：`common-vue-ui/lib/styles/button.css`

```html
<c-button>默认按钮</c-button>
<c-button type="primary">确认按钮</c-button>
<c-button type="text">文字按钮</c-button>
<c-button disabled type="primary">禁用按钮</c-button>
<c-button loading type="primary">加载中...</c-button>
```

### 示例

<div style="margin-top: 20px;">
  <c-button style="margin-right: 10px">默认按钮</c-button>
  <c-button type="primary">确认按钮</c-button>
  <c-button type="text">文字按钮</c-button>
  <c-button disabled style="margin-right: 10px">默认按钮</c-button>
  <c-button disabled type="primary">确认按钮</c-button>
  <c-button disabled type="text">文字按钮</c-button>
  <c-button loading type="primary">加载中...</c-button>
</div>


> 预先提供了 `size` 属性，值需自己定义，没有提供默认样式，需自己写，只需要调整 padding 值即可，样式会以：`c-button--` 为前缀，比如：`c-button--small`

```html
<c-button size="small" type="primary">调整按钮大小</c-button>
```

