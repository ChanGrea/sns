import React from 'react';
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import { font } from 'styled-theme';

import theme from './themes/default';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
`;

const styles = css`
  text-align: center;
`;

const Content = styled.div`
  ${styles}
  font-family: ${font('primary')};
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Content>
          <h1>App.js</h1>
          <p>Initial Configure</p>
        </Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
