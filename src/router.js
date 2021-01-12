import {createRouter, createWebHistory} from "vue-router";
import LatestBrews from "./pages/LatestBrews";
import PickCoffee from "./pages/PickBeans";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", redirect: "/latest"},
        {path: "/latest", component:LatestBrews},
        {path: "/beans", component:PickCoffee}
    ]
});

export default router;