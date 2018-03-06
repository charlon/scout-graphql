import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './apollo.css'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql/' }),
  cache: new InMemoryCache()
});

// here we create a query opearation
const allSpotsQuery = gql`
  query {
    allSpots {
      id
      name
      buildingName
      latitude
      longitude
    }
  }
`;

const SpotsList = ({ data: {loading, error, allSpots }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   const spotsList = allSpots.map( spot =>
     <li key={spot.id}>{spot.name}<br/>
       {spot.buildingName}<br/>
       {spot.latitude}, {spot.longitude}
     </li>
   );
   return (
     <div>
       <h1 className='apollo-header'>Spots</h1>
       <ul className='apollo-list'>
         {spotsList}
       </ul>
     </div>
   );

 };

const SpotsListWithData = graphql(allSpotsQuery)(SpotsList);

ReactDOM.render(
  <ApolloProvider client={client}>
    <SpotsListWithData />
  </ApolloProvider>,
  document.getElementById('apollo')
)
