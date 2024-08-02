import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import {  } from "./assets/main.scss";
import {  } from "./assets/home.scss";
import {  } from "./assets/nav_links_home.scss";

createApp(App)
  .use(router)
  .mount('#app');
