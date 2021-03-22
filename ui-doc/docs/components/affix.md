# 固钉 Affix

常用于漂浮广告，回到顶部等需求。

只提供了基本的固定功能，其它样式需自定义，可以传入 top、left、right、bottom 这四个属性

## 用法

<c-affix bottom="300px" right="100px" style="width: 100px; height: 50px;" class="c-bg-rose-400 c-text-white"><span>我是固钉组件</span></c-affix>

```html
<c-affix bottom="400px" right="100px" style="width: 100px; height: 50px;" class="c-bg-rose-400 c-text-white"><span>我是固钉组件</span></c-affix>

<c-affix right="20px" bottom="20px" style="width: 50px; height: 50px;" @click="handleClick">
  <span>固钉组件</span>
</c-affix>

<c-affix top="20px" left="20px" style="width: 50px; height: 50px;">
  <span>固钉组件</span>
</c-affix>
```

## 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|top|距离页面顶部的距离|string|-|-|
|bottom|距离页面底部的距离|string|-|-|
|left|距离页面左侧的距离|string|-|-|
|right|距离页面右侧的距离|string|-|-|
|@click|点击事件|function|-|-|
