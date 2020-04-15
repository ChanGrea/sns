import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage } from 'components';

import theme from './themes/default';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
