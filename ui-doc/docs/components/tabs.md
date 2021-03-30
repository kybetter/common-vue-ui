# 标签页 Tabs

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。

## 基础用法

<div style="width: 400px; height: 200px;margin: 30px auto;" class="c-shadow-xl">
  <c-tabs v-model="curTab">
    <c-tab-pane label="选项一" name="first" :index="1">选项一</c-tab-pane>
    <c-tab-pane label="选项二" name="second" :index="2">选项二</c-tab-pane>
    <c-tab-pane label="选项三" name="third" :index="3">选项三</c-tab-pane>
    <c-tab-pane label="选项四" name="fourth" :index="4">选项四</c-tab-pane>
  </c-tabs>
</div>

```html
<c-tabs v-model="curTab">
  <c-tab-pane label="选项一" name="first" :index="1">选项一</c-tab-pane>
  <c-tab-pane label="选项二" name="second" :index="2">选项二</c-tab-pane>
  <c-tab-pane label="选项三" name="third" :index="3">选项三</c-tab-pane>
  <c-tab-pane label="选项四" name="fourth" :index="4">选项四</c-tab-pane>
</c-tabs>

<script>
  export default {
    data() {
      return {
        curTab: 'first'
      };
    }
  };
</script>
```

<script>
  export default {
    data() {
      return {
        curTab: 'first',
      }
    }
  }
</script>

## 重写样式

默认样式位置：`common-vue-ui/lib/styles/tabs.css`，你可以参考修改。

## Tabs 配置项

| 参数    | 说明                 | 类型              | 可选值 | 默认值 |
| ------- | -------------------- | ----------------- | ------ | ------ |
| v-model | 当前选项卡的 name 值 | number, string    | -      | -      |
| @change | 切换选项卡时的事件   | function(tabName) | -      | -      |

## TabPane 配置项

| 参数         | 说明                                                       | 类型                    | 可选值      | 默认值 |
| ------------ | ---------------------------------------------------------- | ----------------------- | ----------- | ------ |
| name         | 选项卡的唯一标识                                           | number, string          | -           | -      |
| label        | 选项卡的名称，可以传入字符串，组件                         | string, VNode, function | -           | -      |
| slot="label" | 选项卡的名称，示例：`<span slot="label"> </span>`          | VNode                   | -           | -      |
| index        | 选项卡排序，如果你的选项卡使用了 v-if 时，请手动指定这个值 | number                  | -           | -      |
| forceRender  | 是否强制渲染隐藏的选项卡，而不必等切换到它的时候才渲染     | boolean                 | true, false | false  |
