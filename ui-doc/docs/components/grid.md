# 栅格 Row & Col

栅格组件用于提供基本的布局能力，通过 24 栅格系统，迅速简便地创建布局。

## 基础栅格

<c-row><c-col :span="24"><div class="grid-content c-bg-blue-200">24</div></c-col></c-row>
<c-row>
  <c-col :span="12"><div class="grid-content c-bg-blue-200">12</div></c-col>
  <c-col :span="12"><div class="grid-content c-bg-blue-300">12</div></c-col>
</c-row>
<c-row>
  <c-col :span="8"><div class="grid-content c-bg-blue-200">8</div></c-col>
  <c-col :span="8"><div class="grid-content c-bg-blue-300">8</div></c-col>
  <c-col :span="8"><div class="grid-content c-bg-blue-200">8</div></c-col>
</c-row>
<c-row>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>
<c-row>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
</c-row>


```html
<c-row><c-col :span="24"><div class="grid-content c-bg-blue-200">24</div></c-col></c-row>
<c-row>
  <c-col :span="12"><div class="grid-content c-bg-blue-200">12</div></c-col>
  <c-col :span="12"><div class="grid-content c-bg-blue-300">12</div></c-col>
</c-row>
<c-row>
  <c-col :span="8"><div class="grid-content c-bg-blue-200">8</div></c-col>
  <c-col :span="8"><div class="grid-content c-bg-blue-300">8</div></c-col>
  <c-col :span="8"><div class="grid-content c-bg-blue-200">8</div></c-col>
</c-row>
<c-row>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>
<c-row>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-200">4</div></c-col>
  <c-col :span="4"><div class="grid-content c-bg-blue-300">4</div></c-col>
</c-row>

<style>
.grid-content {
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  margin: 4px 0;
}
</style>
```

## 区块间隔

<c-row :gutter="30">
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>

```html
<c-row :gutter="30">
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>
```

## 栅格偏移

<c-row>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6" :offset="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>

```html
<c-row>
  <c-col :span="6"><div class="grid-content c-bg-blue-200">6</div></c-col>
  <c-col :span="6" :offset="6"><div class="grid-content c-bg-blue-300">6</div></c-col>
</c-row>
```

## 栅格排序

<c-row>
  <c-col :span="6" :push="7"><div class="grid-content c-bg-blue-200">first</div></c-col>
  <c-col :span="6" :pull="6"><div class="grid-content c-bg-blue-300">second</div></c-col>
</c-row>

```html
<c-row>
  <c-col :span="6" :push="7"><div class="grid-content c-bg-blue-200">first</div></c-col>
  <c-col :span="6" :pull="6"><div class="grid-content c-bg-blue-300">second</div></c-col>
</c-row>
```

### Row 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|gutter|栅格间隔|number|-|0|

### Col 配置项

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|span|栅格占据的列数|number|-|24|
|offset|栅格左侧的间隔格数|number|-|0|
|push|栅格向右移动的格数|number|-|0|
|pull|栅格向左移动的格数|number|-|0|

<style>
.grid-content {
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  margin: 4px 0;
}
</style>