import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import store from './store'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [{
  path : '/',
  component : App
}];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {console.log("route before")});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
