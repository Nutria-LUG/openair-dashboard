import { module as DashboardModule } from "@/apps/dashboard";
import { IStoreRootState } from "@/interfaces";
import { ModuleTree } from "vuex/types";

export const modules: ModuleTree<IStoreRootState> = { DashboardModule };
