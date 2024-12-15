import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/routers";
import { createPinia } from "pinia";
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
