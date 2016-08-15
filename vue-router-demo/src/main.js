import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import Router from './router.js';

Vue.use(VueRouter);
var router = new VueRouter({history: true});
Router(router);
router.beforeEach((transition) => {
  document.body.scrollTop = 0;
  transition.next()
});
router.start(Vue.extend(App), '#app')
