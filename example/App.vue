<template>
  <div id="app">
    <c-row>
      <c-col :span="24">
        <c-button style="margin-right: 10px">默认按钮</c-button>
        <c-button type="primary">确认按钮</c-button>
        <c-button type="text">文字按钮</c-button>
        <c-button disabled style="margin-right: 10px">默认按钮</c-button>
        <c-button disabled type="primary">确认按钮</c-button>
        <c-button disabled type="text">文字按钮</c-button>
        <c-button loading type="primary">加载中...</c-button>
      </c-col>
      <c-col style="margin: 20px 0;" :span="24">
        <c-ellipsis style="width: 500px;margin: 0 auto;" :html="enHtml" :rows="1"></c-ellipsis>
      </c-col>
      <c-col :span="24">
        <c-ellipsis style="width: 500px;margin: 0 auto;" :html="zhHtml" :rows="4"></c-ellipsis>
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
  },
  data() {
    return {
      zhHtml:
        '机械制图与是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.机械制图与是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.机械制图与<span class="highlight">CAD</span>是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与<span class="highlight">CAD</span>课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行<span class="highlight">CAD</span>绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.',
      enHtml:
        '2020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 2020'
    };
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
