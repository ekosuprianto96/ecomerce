import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import "./registerServiceWorker";

let app = createApp(App);
// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered:', registration)
    })
    .catch(error => {
      console.log('Error registering Service Worker:', error)
    })
}
app.use(store);
app.use(router);
app.mount("#app");
