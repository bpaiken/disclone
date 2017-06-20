import React from 'react';
import ReactDOM from 'react-dom';
import {register, login, logout} from './actions/session_actions.js';
import configureStore from './store/store';
import Root from './components/root'



window.login = login;
window.logout = logout;
window.register = register;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
 
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});