import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(
  location: import('vue-router').RawLocation,
) {
  //@ts-ignore
  return originalPush.call(this, location).catch((err: any) => err);
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'home',
        meta: {
          title: 'home',
        },
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'about',
        meta: {
          title: '회원관리',
        },
        component: () => import('../views/About.vue'),
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
