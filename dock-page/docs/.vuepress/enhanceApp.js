import CUI from "../../../src/index";
import "../../../lib/styles/default-theme.css";
import "../../../lib/styles/colors.css";
import "../../../lib/styles/utils.css";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(CUI);
};
