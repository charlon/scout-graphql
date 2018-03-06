import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache()
});

// here we create a query opearation
const allSpotsQuery = gql`
  query {
    allSpots {
      id
      name
    }
  }
`;

const SpotsList = ({ data: {loading, error, name }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { name.map( ch => <li key={ch.id}>{ch.name}</li> ) }
   </ul>;
 };

const SpotsListWithData = graphql(allSpotsQuery)(SpotsList);

ReactDOM.render(
  <ApolloProvider client={client}>
    <SpotsListWithData />
  </ApolloProvider>,
  document.getElementById('apollo')
)
