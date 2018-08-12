import { createRouter, useVueRouter } from '@/plugins/vue-router';
import { createStore, useVuex } from '@/plugins/vuex';
import Vue from 'vue';
import App from '@/App.vue';

useVueRouter();
useVuex();

new Vue({
  el: '#app',
  router: createRouter(),
  store: createStore(),
  render: (h) => h(App),
});
