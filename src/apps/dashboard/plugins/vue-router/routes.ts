import { RouteConfig } from "vue-router/types";

import App from "../../App.vue";

export const routes: RouteConfig[] = [
  { path: "/dashboard", name: "dashboard-app", component: App }
];
