import {createRouter, createWebHistory} from "vue-router";
import LatestBrews from "./pages/LatestBrews";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", redirect: "/latest"},
        {path: "/latest", component:LatestBrews}
    ]
});

export default router;