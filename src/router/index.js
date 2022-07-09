import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import HomePage from "../views/HomeView.vue";
import RegisterPage from "../views/Register";
import LoginPage from "../views/Login";
import TransactionsPage from "../views/Transactions";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { guest: true },
  },
  {
    path: "/transactions",
    name: "Posts",
    component: TransactionsPage,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
