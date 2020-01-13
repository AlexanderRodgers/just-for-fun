import React from 'react';
import ApolloClient from 'apollo-client';
import App from '../App';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import allReducers from '../src/redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { gql } from 'apollo-boost';
const store = createStore(allReducers);

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4200/graphql',
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query {
      events {
        date
        _id
      }
    }
  `
}).then(res => console.log(res));

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}