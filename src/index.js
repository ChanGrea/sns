import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import configureStore from 'store/configure';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import api from 'services/api';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

const store = configureStore({}, { api: api.create() });

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById('root');
ReactDOM.render(renderApp(), root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
