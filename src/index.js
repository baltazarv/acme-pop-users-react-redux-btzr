import React from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './store'; // , { loadUsers }
import { Provider } from 'react-redux';

render((
  <Provider store={ store }>
    <App />
  </Provider>
  ), document.getElementById('app'));

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(loadUsers());
