import React from 'react';
import App from '../App';
import allReducers from '../src/redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers);

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}