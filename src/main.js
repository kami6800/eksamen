import "./assets/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import store from "./store/index.js"
import CoffeeCard from "./components/CoffeeCard"
import BaseHeader from "./components/BaseHeader"
import BaseCard from "./components/BaseCard"
import RecipeWidget from "./components/RecipeWidget"
import BottomNav from "./components/BottomNav"

const app = createApp(App);

app.use(router);
app.use(store);

app.component("coffee-card", CoffeeCard);
app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);
app.component("recipe-widget", RecipeWidget);
app.component("bottom-nav", BottomNav);

app.mount('#app');
