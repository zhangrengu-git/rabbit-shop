import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
// import Layout from '@/views/Layout/index.vue'
// import Home from '@/views/Home/index.vue'
const Login = () => import("@/views/Login/index.vue")
const Layout = import("@/views/Layout/index.vue")
const Home = import("@/views/Home/index.vue")

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
