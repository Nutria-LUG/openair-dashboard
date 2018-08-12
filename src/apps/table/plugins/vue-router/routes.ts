import { RouteConfig } from 'vue-router/types';

import App from '../../App.vue';

export const routes: RouteConfig[] = [
  {
    path: '/template',
    name: 'template-app',
    component: App,
  },
];
