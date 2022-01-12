import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

let staticRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

Array.prototype.push.apply(staticRoutes, require("./blogEntries"));
Array.prototype.push.apply(staticRoutes, require("./portfolioEntries"));

const routes = staticRoutes;

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
