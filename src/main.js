// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import "./assets/css/style.css";
// import Toast from "vue3-toastify";
// import "vue3-toastify/dist/index.css";

// createApp(App).use(router).mount("#app");


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";

import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast); 

app.mount("#app"); 
