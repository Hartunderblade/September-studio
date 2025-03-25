import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue';
import Home from "@/pages/Home.vue";
import Login from "@/features/user/Login.vue";
import Registration from "@/features/user/Registration.vue";
import Profile from "@/pages/Profile.vue";
import ThanksOrder from "@/pages/ThanksOrder.vue";
import User from "@/pages/User.vue";
import BriefOne from "@/features/brief/BriefOne.vue";
import BriefTwo from "@/features/brief/BriefTwo.vue";
import BriefThree from "@/features/brief/BriefThree.vue";
import Admin from "@/pages/Admin.vue";
import AdminUsers from "@/pages/AdminUsers.vue";
import AdminOrders from "@/pages/AdminOrders.vue";
import AdminReviews from "@/pages/AdminReviews.vue";
import AdminFeedback from "@/pages/AdminFeedback.vue";

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
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '/user',
          name: 'profile',
          component: Profile,
        },
        {
          path: '/user/thanks',
          name: 'thanks',
          component: ThanksOrder,
        },
        {
          path: '/user/briefOne',
          name: 'briefOne',
          component: BriefOne,
        },
        {
          path: '/user/briefTwo',
          name: 'briefTwo',
          component: BriefTwo,
        },
        {
          path: '/user/BriefThree',
          name: 'BriefThree',
          component: BriefThree,
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/admin',
          name: 'users',
          component: AdminUsers,
        },
        {
          path: '/admin/orders',
          name: 'orders',
          component: AdminOrders,
        },
        {
          path: '/admin/reviews',
          name: 'reviews',
          component: AdminReviews,
        },
        {
          path: '/admin/feedback',
          name: 'feedback',
          component: AdminFeedback,
        }
      ]
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
