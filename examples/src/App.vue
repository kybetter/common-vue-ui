<template>
  <div id="app">
    <c-button @click="show = !show">show</c-button>
    <div style="width: 500px; height: 400px; margin: 0 auto" class="c-shadow-xl">
      <c-tabs v-model="curTab">
        <c-tab-pane :label="FooBoo" name="first" :index="1">
          <span slot="label">自定义选项一</span>
          111111111dfsdf
        </c-tab-pane>
        <c-tab-pane label="选项二选项二" name="second" :index="2">22222222222serwe</c-tab-pane>
        <c-tab-pane v-if="show" label="选项三选项三" name="third" :index="3">
          3333333333sdfwef
        </c-tab-pane>
        <c-tab-pane label="选项四选项四" name="fourth" :index="4">444444sdfwef</c-tab-pane>
        <c-tab-pane label="选项5选项5" name="5" :index="5">5</c-tab-pane>
        <c-tab-pane label="选项6选项6" name="6" :index="6">6</c-tab-pane>
        <c-tab-pane label="选项7选项7" name="7" :index="7">7</c-tab-pane>
        <c-tab-pane label="选项7选项8" name="8" :index="8">7</c-tab-pane>
        <c-tab-pane label="选项7选项9" name="9" :index="9">7</c-tab-pane>
        <c-tab-pane label="选项7选项10" name="10" :index="10">7</c-tab-pane>
        <c-tab-pane label="选项7选项11" name="11" :index="11">7</c-tab-pane>
        <c-tab-pane label="选项7选项12" name="12" :index="12">7</c-tab-pane>
      </c-tabs>
    </div>

    <c-dropdown placement="bottom-end">
      <span>下拉菜单</span>
      <c-dropdown-menu slot="dropdown">
        <c-dropdown-item>下拉菜单项1</c-dropdown-item>
        <c-dropdown-item>下拉菜单项2</c-dropdown-item>
        <c-dropdown-item disabled>下拉菜单项3</c-dropdown-item>
        <c-dropdown-divider></c-dropdown-divider>
        <c-dropdown-item>下拉菜单项4</c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
    <c-pagination :totalPage="10" v-model="currentPage"></c-pagination>
    <div style="width: 1200px; margin: 20px auto">
      <c-row :gutter="20">
        <c-col :span="8">
          <div class="c-bg-blue-400">test</div>
        </c-col>
        <c-col :span="8">
          <div class="c-bg-blue-400">test</div>
        </c-col>
        <c-col :span="8">
          <div class="c-bg-blue-400">test</div>
        </c-col>
      </c-row>
    </div>
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
      <c-col style="margin: 20px 0" :span="24">
        <c-ellipsis style="width: 160px; margin: 0 auto" :html="enHtml" :rows="2"></c-ellipsis>
      </c-col>
      <c-col :span="24">
        <c-ellipsis style="width: 500px; margin: 0 auto" :html="zhHtml" :rows="4"></c-ellipsis>
      </c-col>
      <c-col :span="24">
        <c-affix style="width: 50px; height: 50px; background: pink" right="20px" bottom="20px">
          <span>固钉组件</span>
        </c-affix>
      </c-col>
      <c-col :span="24">
        <div style="width: 500px; margin: 0 auto">
          <span class="c-text-blue-200">我是带有颜色的文字</span>
          <span class="c-text-blue-400">我是带有颜色的文字</span>
          <span class="c-text-blue-600">我是带有颜色的文字</span>
          <span class="c-text-amber-400">我是带有颜色的文字</span>
          <span class="c-text-emerald-600">我是带有颜色的文字</span>
        </div>
      </c-col>
      <c-col :span="24"></c-col>
    </c-row>
  </div>
</template>

<script>
import FooBoo from './components/foo-boo.vue';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      FooBoo,

      curTab: 'first',
      show: false,
      label: h => {
        return h('div', [h('span', '标签一++')]);
      },
      currentPage: 1,
      zhHtml:
        '机械制图与是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.机械制图与是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.机械制图与<span class="highlight">CAD</span>是机械类专业必不可少的两门专业基础课程,都以培养学生的识图、制图能力以及空间想象力为目标.但在实际教学中,两门课程是分开开设的,内容重复,需要花费大量的精力、时间去练习.本文对机械制图与<span class="highlight">CAD</span>课程进行整合,形成一体化的教学模式,在掌握了机械制图知识的基础上,用计算机软件进行<span class="highlight">CAD</span>绘图,可以大大提高绘图的速度和精确度,调动了学生学习主动性和积极性,提高了学生参与度,教学效果显著.',
      enHtml:
        '2020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 20202020 5th International Workshop on Materials Engineering and Computer Sciences 2020'
    };
  },
  mounted() {},
  methods: {
    menuclick(e) {
      console.log('menu', e);
    },
    itemclick(e) {
      console.log('item', e);
    }
    // togglePop() {
    //   this.showPop = !this.showPop;
    //   if (this.showPop) {

    //   }
    // }
  }
};
</script>

<style lang="scss">
#app {
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
