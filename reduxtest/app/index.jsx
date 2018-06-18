import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './container/App.jsx';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);
