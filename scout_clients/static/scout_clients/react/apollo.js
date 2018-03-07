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
const ALL_SPOTS_QUERY = gql`
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
     <li key={spot.id} className="media">
       <div className="media-left">
         <a href="#"><img class="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
       </div>
       <div className="media-body">
         <h4 className="media-heading">{spot.name}</h4>
         <p>{spot.buildingName}<br/>
         {spot.latitude}, {spot.longitude}</p>
       </div>
     </li>
   );
   return (
     <div>
       <h2 className='apollo-header'>Apollo Client</h2>
       <div className = "col-lg-12">
         <ul class="media-list apollo-list">
           {spotsList}
         </ul>
       </div>
     </div>
   );
 };

const SpotsListWithData = graphql(ALL_SPOTS_QUERY)(SpotsList);

ReactDOM.render(
  <ApolloProvider client={client}>
    <SpotsListWithData />
  </ApolloProvider>,
  document.getElementById('apollo')
)
