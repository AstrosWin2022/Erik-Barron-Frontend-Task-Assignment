import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer/index'

// const reducer = (state, action) => {
//   console.log(state);
//   return state;
// };

const initialState = {
  posts: []
};

const store = createStore(reducer, initialState);

// store.subscribe(() => {
//   console.log('current state', store.getState());
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

