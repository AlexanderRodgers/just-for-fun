import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from '../redux/reducers';
// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(allReducers);

function HomePage() {
   return (
      <Provider store={store}>
         <App/>
      </Provider>
   );
};

export default HomePage;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
