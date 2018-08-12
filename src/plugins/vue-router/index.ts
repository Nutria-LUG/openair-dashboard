import Vue from 'vue';
import Router from 'vue-router';
import { router } from './router';

function useVueRouter() {
  Vue.use(Router);
}

function createRouter() {
  return new Router(router);
}

export { useVueRouter, createRouter };
