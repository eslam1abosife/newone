import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// استيراد ملفات CSS
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// تعريف التطبيق
const app = createApp(App);

app.use(createPinia());
app.use(router);

// ربط التطبيق بالمستعرض
app.mount("#app");
