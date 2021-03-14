import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  /*{
    path: "/homepagenotenternever",
    name: "Home",
    component: Home
  },*/
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/",
    name: "Sign In",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("../views/Feed.vue")
  },
  {
    path: "/profile",
    name: "My Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: () => import("../views/Notifications.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
