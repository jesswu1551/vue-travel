import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Travel from "../views/Travel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel,
    children: [
      { path: "spain", name: "Spain", component: () => import("../components/Spain.vue") },
      { path: "finland", name: "Finland", component: () => import("../components/Finland.vue") },
      { path: "czech", name: "Czech", component: () => import("../components/Czech.vue") },
    ]
  },
  {
    path: "/404", // "*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
