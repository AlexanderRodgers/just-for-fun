import React from 'react';
import Layout from './src/components/Layout';
import Home from './src/components/Home';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import allReducers from './src/redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import rootContext from './src/contexts/rootContext';

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

const App = () => {
  return (
    <Provider context={rootContext} store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Home />
        </Layout>
      </ApolloProvider>
    </Provider >
  );
}

export default App;
