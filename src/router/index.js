import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Courses from "../components/Courses.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/courses",
    component: Courses,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
