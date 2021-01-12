import "./assets/tailwind.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import CoffeeCard from "./components/CoffeeCard"

const app = createApp(App);

app.use(router);

app.component("coffee-card", CoffeeCard);

app.mount('#app');
