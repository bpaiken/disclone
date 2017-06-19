import React from 'react';
import ReactDOM from 'react-dom';
// import {signup, login, logout} from './actions/session_actions';
// import configureStore from './store/store';
// import Root from './components/root'



// window.login = login;
// window.logout = logout;
// window.signup = signup;


document.addEventListener('DOMContentLoaded', () => {
//   let store;
// if (window.currentUser) {
//   const preloadedState = { session: { currentUser: window.currentUser } };
//   store = configureStore(preloadedState);
//   delete window.currentUser;
// } else {
//   store = configureStore();
// }
//   window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<span>Hello Disclone!</span>, root);
});