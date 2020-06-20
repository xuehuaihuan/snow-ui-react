import React, { ReactElement } from 'react';

import theme from '@/common/theme';
import { ThemeProvider } from 'styled-components';
import { AppProps } from './PropsType';
// import { GlobalIconfontStyle } from './assets/iconfont';
// import {
//   GlobalStyle,
//   GlobalTextStyle,
//   GlobalIconStyle,
//   GlobalHalfpxBorderStyle,
// } from './assets/styles';

export const App = (props: AppProps): ReactElement => {
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

// App.defaultProps = {};

// App.propTypes = {
//   children: any,
// };

export default App;
