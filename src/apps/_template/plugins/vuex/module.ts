import { Module } from 'vuex/types';

import { IStoreState } from '../../interfaces';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state';

export const module: Module<IStoreState, any> = {
  actions,
  getters,
  mutations,
  state,
};
