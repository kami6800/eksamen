import {createRouter, createWebHistory} from "vue-router";
import LatestBrews from "./pages/LatestBrews";
import PickCoffee from "./pages/PickBeans";
import PickBrew from "./pages/PickBrew";
import RecipeSteps from "./pages/RecipeSteps";
import UserLogin from "./pages/UserLogin";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "/", redirect: "/login"},
        {path: "/login", component:UserLogin},
        {path: "/latest", component:LatestBrews},
        {path: "/beans", component:PickCoffee},
        {path: "/brew", component:PickBrew},
        {path: "/recipe", component:RecipeSteps}
    ]
});

export default router;