// 1.引入模块
import Vue from 'vue';
import VueRouter from 'vue-router';

// 2.引入页面模块
import RouterConfig from './modules';

// 3.声明使用
Vue.use(VueRouter);

// 4.创建路由对象
const router = new VueRouter({
  mode: 'hash',
  base: '/electriccar-manage',
  routes: RouterConfig
});

// 5.导出路由对象
export default router;
