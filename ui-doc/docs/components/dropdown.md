# 下拉菜单 Dropdown

通用的下拉菜单组件，适配多种需求场景。

## 用法

<div style="padding: 20px;text-align: center;font-size: 14px;"><c-dropdown><span>下拉菜单</span><c-dropdown-menu slot="dropdown"><c-dropdown-item>下拉菜单项1</c-dropdown-item><c-dropdown-item>下拉菜单项2</c-dropdown-item><c-dropdown-item disabled>下拉菜单项3</c-dropdown-item><c-dropdown-divider></c-dropdown-divider><c-dropdown-item>下拉菜单项4</c-dropdown-item></c-dropdown-menu></c-dropdown></div>

```html
<c-dropdown trigger="click">
  <span>下拉菜单</span>
  <c-dropdown-menu slot="dropdown" @click="handleMenuClick">
    <c-dropdown-item name="item-value1" @click="handleItemClick">下拉菜单项1</c-dropdown-item>
    <c-dropdown-item>下拉菜单项2</c-dropdown-item>
    <c-dropdown-item disabled>下拉菜单项3</c-dropdown-item>
    <c-dropdown-divider></c-dropdown-divider>
    <c-dropdown-item>下拉菜单项4</c-dropdown-item>
  </c-dropdown-menu>
</c-dropdown>

<script>
export default {
  methods: {
    handleMenuClick(itemName) {},
    handleItemClick(event) {}
  }
}
</script>
```

## 重写样式

菜单默认样式位置：`common-vue-ui/lib/styles/dropdown.css`，你可以参考修改。

## c-dropdown 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|trigger|触发方式|string|"click", "hover"|"click"|
|default slot|默认插槽|string, VNode|-|-|
|dropdown slot|菜单插槽|VNode|-|-|

## c-dropdown-menu 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|slot="dropdown"|菜单插槽|string|-|-|
|click|使用 c-dropdown-item 时有效，收集菜单项的点击事件，参数为 c-dropdown-item 的 name 属性值|any|-|-|

## c-dropdown-item 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|name|菜单项点击时触发的值|any|-|undefined|
|click|普通点击事件|function|-|-|
|disabled|禁用菜单项|boolean|true, false|false|
|default slot|默认插槽|string, VNode|-|-|

