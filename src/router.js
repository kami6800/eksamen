import {createRouter, createWebHistory} from "vue-router";
import LatestBrews from "./pages/LatestBrews";
import PickCoffee from "./pages/PickCoffee";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", redirect: "/latest"},
        {path: "/latest", component:LatestBrews},
        {path: "/pick", component:PickCoffee}
    ]
});

export default router;