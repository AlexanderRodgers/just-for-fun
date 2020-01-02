import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

// STORE

// ACTION
const toLogin = () => {
   return {
      type: 'TO_LOGIN'
   };
}

const toHome = () => {
   return {
      type: 'TO_HOME'
   };
}

const toSignUp = () => {
   return {
      type: 'TO_SIGNUP'
   }
}
// REDUCER
const login = (state, action) => {
   switch(action.type) {
      case 'TO_LOGIN':
         return true;
      case 'TO_HOME':
         return false;
   }
}

const signUp = (state, action) => {
   switch(action.type) {
      case 'TO_SIGNUP':
         return true;
      case 'TO_HOME':
         return false;
   }
}

let store = createStore(login);

store.subscribe(() => console.log(store.getState()));
// DISPATCH
store.dispatch(toLogin());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
