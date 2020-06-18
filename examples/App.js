import React from 'react';
import PropTypes from 'prop-types';

import theme from '../src/common/theme';
import { ThemeProvider } from 'styled-components';
// import { GlobalIconfontStyle } from './assets/iconfont';
// import {
//   GlobalStyle,
//   GlobalTextStyle,
//   GlobalIconStyle,
//   GlobalHalfpxBorderStyle,
// } from './assets/styles';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        {props.children}
        {/* <GlobalStyle />
        <GlobalIconfontStyle />
        <GlobalIconStyle />
        <GlobalTextStyle />
        <GlobalHalfpxBorderStyle /> */}
      </div>
    </ThemeProvider>
  );
};

App.defaultProps = {};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
