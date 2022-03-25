import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout
    },
    {
      path:'/login',
      component:() => import("@/views/Login/index.vue")
    }
  ],
});

export default router;
