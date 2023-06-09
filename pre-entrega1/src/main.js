import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Registro from './components/Registro.vue';
import Login from './components/Login.vue';
import Listado from './components/Listado.vue';
import Info from './components/Info.vue';
import Carrito from './components/Carrito.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/registro', component: Registro },
  { path: '/login', component: Login },
  { path: '/listado', component: Listado },
  { path: '/info', component: Info },
  { path: '/carrito', component: Carrito },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');