import Vue from 'vue';
import Vuex from 'vuex';

import { store } from './store';

function useVuex() {
  Vue.use(Vuex);
}

function createStore() {
  return new Vuex.Store(store);
}

export { useVuex, createStore };
