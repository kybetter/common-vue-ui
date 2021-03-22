# 按钮 Button

常用的操作按钮。

## 基础用法

<div style="margin-top: 20px;">
  <c-button>默认按钮</c-button>
  <c-button type="primary">确认按钮</c-button>
  <c-button type="text">文字按钮</c-button>
  <c-button disabled type="primary">禁用按钮</c-button>
  <c-button loading type="primary">加载中...</c-button>
</div>

```html
<div>
  <c-button>默认按钮</c-button>
  <c-button type="primary">确认按钮</c-button>
  <c-button type="text">文字按钮</c-button>
  <c-button disabled type="primary">禁用按钮</c-button>
  <c-button loading type="primary">加载中...</c-button>
</div>
```

## 自定义尺寸

预先提供了 `size` 属性，值需自己定义，没有提供默认样式，需自己写，只需要调整 padding 值即可，样式会以：`c-button--` 为前缀，比如：`c-button--small`

<c-button size="small" type="primary">小按钮</c-button>

```html
<c-button size="small" type="primary">小按钮</c-button>

<style>
.c-button--small {
  height: 24px;
  padding: 0px 6px;
}
</style>
```

<style>
.c-button--small {
  height: 24px;
  padding: 0px 6px;
}
</style>

## 重写样式

按钮的默认样式位置：`common-vue-ui/lib/styles/button.css`，你可以参考修改。

## 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|type|按钮类型|string|"primary", "text"|"default"|
|disabled|是否禁用按钮|boolean|true, false|false|
|loading|展示按钮加载状态|boolean|true, false|false|
|size|自定义按钮尺寸|string|诸如："small"，"large" 等都是可以的|-|
