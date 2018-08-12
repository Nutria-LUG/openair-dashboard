import { ActionTree } from "vuex";
import { IStoreState } from "../../interfaces/IStoreState";
import { DatasetService } from "../../services";

export const actions: ActionTree<IStoreState, any> = {
  updateDataset: context => {
    DatasetService.getAllDatasets().then(datasets => {
      context.state.datasets = datasets;
    });
  }
};
