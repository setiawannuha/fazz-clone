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
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/online-course",
      name: "online course",
      component: () => import("../views/OnlineCourseView.vue"),
    },
    {
      path: "/minicamp",
      name: "Minicamp",
      component: () => import("../views/MinicampView.vue"),
    },
    {
      path: "/minicamp/:id",
      name: "Minicamp Detail",
      component: () => import("../views/MinicampDetailView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
