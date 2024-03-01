import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: 'home',
      path: '/home',
      component: './Home',
      layout: false,
    },

    {
      path: '*',
      layout: false,
      component: './404',
    },
  ],
  npmClient: 'cnpm',
});
