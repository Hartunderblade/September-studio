import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue';
import Home from "@/pages/Home.vue";
import Login from "@/features/user/Login.vue";
import Registration from "@/features/user/Registration.vue";
import Profile from "@/pages/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    }
  ],
})

export default router
