import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from '@/pages/404.vue';
import Home from '@/pages/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'article',
    path: '/article:id',
    component: () => import('@/pages/home.vue'),
    props: true,
    meta: { title: 'article' }
  },
  {
    name: '404',
    path: '/404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)', // 此处需特别注意至于最底部
    redirect: '/404'
  }
];
let history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `DAO for Journal | ${to.meta.title}`;
  }
  next();
});

export default router;
