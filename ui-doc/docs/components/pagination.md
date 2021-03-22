# 分页 Pagination

常规分页器。

## 用法

<c-pagination :totalPage="10" v-model="currentPage"></c-pagination>

```html
<c-pagination :totalPage="10" v-model="currentPage"></c-pagination>
```

<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  }
}
</script>

## 重写样式

分页的默认样式位置：`common-vue-ui/lib/styles/pagination.css`，你可以参考修改。

## 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|totalPage|总页数。当总页数为 0 时，分页器将隐藏|number|-|0|
|v-model|当前页|number|-|1|

