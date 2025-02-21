import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/styles/minxin.css';
const app = createApp(App);
app.use(store);
app.use(router);
// 路由加载之后再挂载app
router
    .isReady()
    .then(() => {
    app.mount("#app");
})
    .catch((err) => {
    console.error(err);
});
