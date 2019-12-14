import React from 'react';
import PropTypes from 'prop-types';

import theme from './lib/common/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalIconfontStyle } from './assets/iconfont';
import {
  GlobalStyle,
  GlobalTextStyle,
  GlobalIconStyle,
} from './assets/styles';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        {props.children}
        <GlobalStyle />
        <GlobalIconfontStyle />
        <GlobalIconStyle />
        <GlobalTextStyle />
      </div>
    </ThemeProvider>
  );
};

App.defaultProps = {};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
