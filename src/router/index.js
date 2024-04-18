import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ServicesView from "@/views/ServicesView.vue";
import SignInView from "@/views/SignInView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/About",
    name: "About",
    component: AboutView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/Services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignInView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
