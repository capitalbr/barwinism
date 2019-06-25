import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from "./store/store";

// begin window stuff
import { signup, login, logout } from "./actions/session_actions"
// import { signup, login, logout } from "./util/session_api_util"
// end window stuff 

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // begin window stuff
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end window stuff

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});