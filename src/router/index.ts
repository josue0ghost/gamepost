import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//import Home from "../views/Home.vue";

//import middleware
import auth from "../middleware/auth";
import guest from "@/middleware/guest";
import user from "@/middleware/user";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      middleware: guest
    }
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue"),
    meta: {
      middleware: guest
    }
  },
  {
    path: "/",
    name: "Sign In",
    component: () => import("../views/SignIn.vue"),
    meta: {
      middleware: guest
    }
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("../views/Feed.vue"),
    meta: {
      middleware: user
    }
  },
  {
    path: "/profile",
    name: "My Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      middleware: user
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
    meta: {
      middleware: user
    }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () => import("../views/Notifications.vue"),
    meta: {
      middleware: user
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
