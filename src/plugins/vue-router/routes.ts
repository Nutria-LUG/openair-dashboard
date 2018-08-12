import { routes as DashboardRoutes } from "@/apps/dashboard";
import { RouteConfig } from "vue-router/types";

export const routes: RouteConfig[] = [
  {
    path: "/",
    name: "app",
    redirect: "/dashboard"
  },
  ...DashboardRoutes
];
