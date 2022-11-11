import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from '../components/HomePage.vue'
import CreateEvent  from "@/components/CreateEvent";
import SignIn from "@/components/SignIn.vue";
import RegisterComponent from "@/components/Register.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeComponent,
    },
    {
        path: "/create_event",
        name: "CreateEvent",
        component: CreateEvent ,
    },
    {
        path: "/login",
        name: "SignIn",
        component: SignIn ,
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;