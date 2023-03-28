// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '奈亚子主页导航',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/bootstrap-home',
    name: 'BootStrap Home',
    meta: {
      title: 'bootstrap练习测试',
      icon: '',
    },
    component: () => import('@/views/project/bootstrap-home/index.vue'),
  },
  {
    path: '/niao-bi',
    name: 'NiaoBi',
    meta: {
      title: 'niao-bi',
      icon: '',
    },
    component: () => import('@/views/project/niao-bi/index.vue'),
  },
  {
    path: '/tik-tok-cn',
    name: 'TikTok',
    meta: {
      title: '抖音',
      icon: './src/views/project/tik-tok-cn/img/favicon_v2.ico',
    },
    component: () => import('@/views/project/tik-tok-cn/index.vue'),
  },
];

export default asyncRoutes;
