<template>
  <div id="app">
    <c-row>
      <c-col :span="24">
        <c-button style="margin-right: 10px;">默认按钮</c-button>
        <c-button type="primary">确认按钮</c-button>
        <c-button type="text">文字按钮</c-button>
        <c-button disabled style="margin-right: 10px;">默认按钮</c-button>
        <c-button disabled type="primary">确认按钮</c-button>
        <c-button disabled type="text">文字按钮</c-button>
        <c-button loading type="primary">加载中...</c-button>
      </c-col>
    </c-row>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
