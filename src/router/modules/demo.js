import Home from 'views/Home.vue';
import About from 'views/About.vue';

export default [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About
  }
];
