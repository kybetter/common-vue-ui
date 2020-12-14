<template>
  <div id="app">
    <c-row>
      <c-col :span="3">common-vue-ui</c-col>
      <c-col :span="8">common-vue-ui</c-col>
      <c-col :span="8">common-vue-ui</c-col>
      <c-col :span="16">common-vue-ui</c-col>
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
