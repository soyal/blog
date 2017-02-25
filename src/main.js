import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import router from './vue-router';

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");