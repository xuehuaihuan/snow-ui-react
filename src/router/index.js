import asyncComponent from './async-component';

const routes = [
  {
    path: '/',
    component: asyncComponent(() => import('../views/home')),
    exact: true,
  },
  {
    path: '/home',
    component: asyncComponent(() => import('../views/home')),
    exact: true,
  },
  {
    path: '/button',
    component: asyncComponent(() => import('../examples/button')),
    exact: true,
  },
  {
    path: '/ripple',
    component: asyncComponent(() => import('../examples/ripple')),
    exact: true,
  },
  {
    path: '/spinner',
    component: asyncComponent(() => import('../examples/spinner')),
    exact: true,
  },
];

export default routes;
