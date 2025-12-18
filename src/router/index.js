import AddRest from "@/components/AddRest.vue";
import HomePage from "@/components/homePage.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";
import LoginPage from "@/components/loginPage.vue";
import SignUp from "@/components/signUp.vue";
import UpdateRest from "@/components/UpdateRest.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path:"/",
    name:"signUp",
    component: SignUp
  },
  {
    path:"/home",
    name:"home",
    component: HomePage
  },
  {
    path:"/login",
    name:"login",
    component: LoginPage
  },
  {
    path:"/mainlayout",
    name:"mainlayout",
    component: MainLayout
  },
  {
    path:"/add-restaurant",
    name:"add-restaurant",
    component: AddRest
  },
  {
    path:"/update-restaurant",
    name:"update-restaurant",
    component: UpdateRest
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
