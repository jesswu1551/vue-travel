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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel,
    children: [
      {
        path: "greece",
        name: "Greece",
        component: () => import("../components/Greece.vue"),
      },
      {
        path: "united_kingdom",
        name: "United Kingdom",
        component: () => import("../components/UnitedKingdom.vue"),
      },
      {
        path: "greenland",
        name: "Greenland",
        component: () => import("../components/Greenland.vue"),
      },
    ],
  },
  {
    path: "/404", // "*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
  // {
  //   path: "*",
  //   redirect: "/404",
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404");
  } else {
    next();
  }
});

export default router;
