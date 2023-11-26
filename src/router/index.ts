import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useRouter } from "vue-router";

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (token) {
    next();
  } else {
    router.push("/login");
  }
};

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
      beforeEnter: authGuard,
    },
    {
      path: "/video-form",
      name: "video form",
      component: () => import("../views/VideoFormView.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/minicamp",
      name: "Minicamp",
      component: () => import("../views/minicamp/MinicampView.vue"),
    },
    {
      path: "/minicamp/detail/:id",
      name: "Minicamp Detail",
      component: () => import("../views/minicamp/MinicampDetailView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/manage-minicamp",
      name: "ManageMinicamp",
      component: () => import("../views/MinicampForm.vue"),
    },
  ],
});

export default router;
