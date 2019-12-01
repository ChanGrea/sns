import React from 'react';
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from 'components';
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
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </Content>
      </ThemeProvider>
    </div>
  );
}

export default App;
