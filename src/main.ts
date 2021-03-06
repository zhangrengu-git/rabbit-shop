import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
// 按照项目需求，提供自己的公用样式
import "@/assets/styles/common.less";
import XtxUI from "./components/XtxUI";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(XtxUI)

app.mount("#app");
