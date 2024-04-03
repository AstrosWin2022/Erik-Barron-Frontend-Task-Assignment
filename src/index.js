import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer/index';

const initialState = {
  posts: [],
  name: 'Erik Barron'
};

const _store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={_store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

