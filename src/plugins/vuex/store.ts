import { IStoreRootState } from "@/interfaces";
import { StoreOptions } from "vuex/types";

import { actions } from "./actions";
import { getters } from "./getters";
import { modules } from "./modules";
import { mutations } from "./mutations";
import { state } from "./state";

export const store: StoreOptions<IStoreRootState> = {
  actions,
  getters,
  modules,
  mutations,
  state
};
