import CUI from "common-vue-ui";
import "common-vue-ui/lib/styles/index.css";
import "common-vue-ui/lib/styles/default-theme.css";
import "common-vue-ui/lib/styles/colors.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(CUI);
};
