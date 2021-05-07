import { createRouter, createWebHistory } from "vue-router";

// 1. Define route components.
import Home from "../views/Home.vue";
import MwlRegView from "../views/MwlRegisterView.vue";

// 2. Define some routes (Each route should map to a component.)
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mwl-register-view",
    name: "MwlRegisterView",
    component: MwlRegView,
  },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
