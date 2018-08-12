import { GetterTree } from "vuex";

import { IStoreState } from "../../interfaces";

export const getters: GetterTree<IStoreState, any> = {
  datasets: state => {
    return state.datasets;
  }
};
