import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'login', path: '/login', component: Login },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
