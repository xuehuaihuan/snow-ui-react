//import asyncComponent from './async-component';
import Home from '../views/home';
import Button from '../examples/button';
import Ripple from '../examples/ripple';
import Spinner from '../examples/spinner';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/button',
    component: Button,
    exact: true,
  },
  {
    path: '/ripple',
    component: Ripple,
    exact: true,
  },
  {
    path: '/spinner',
    component: Spinner,
    exact: true,
  },
];

export default routes;
