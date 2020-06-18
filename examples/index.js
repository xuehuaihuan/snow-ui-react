import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import App from './App';

import routes from './router';

const Routes = renderRoutes(routes);

document.body.addEventListener('touchstart', function () {});

ReactDOM.render(
  <HashRouter>
    <App>
      {Routes}
    </App>
  </HashRouter>
  , document.getElementById('root'));
