import "./assets/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import CoffeeCard from "./components/CoffeeCard"
import BaseHeader from "./components/BaseHeader"
import BaseCard from "./components/BaseCard"

const app = createApp(App);

app.use(router);

app.component("coffee-card", CoffeeCard);
app.component("base-header", BaseHeader);
app.component("base-card", BaseCard);

app.mount('#app');
