import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

// 路由配置中添加动态参数
// {
//   path: '/user/:id',
//   name: 'user',
//   component: () => import('@/views/UserView.vue')
// }

// // 组件内获取参数
// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route.params.id)  // 输出动态 id

// const routes = [
//   {
//     path: '/dashboard',
//     component: () => import('@/layouts/DashboardLayout.vue'),
//     children: [
//       { path: '', component: () => import('@/views/DashboardHome.vue') },
//       { path: 'settings', component: () => import('@/views/DashboardSettings.vue') }
//     ]
//   }
// ]

// 全局前置守卫 -->例如登录拦截功能-->需在路由文件里配置单个路由的mata
// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     return { name: 'login' }
//   }
// })

export default router;
