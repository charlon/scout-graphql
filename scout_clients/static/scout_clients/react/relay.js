import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay, { QueryRenderer, graphql } from "react-relay";
import environment from './environment';

// change rootContainer to QueryRenderer
ReactDOM.render(
  <QueryRenderer
    environment={environment}
    query={graphql`
      query allSpots {
          edges {
            node {
              id
              latitude
              longitude
            }
          }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{props}</div>;
      }
      return <div>Loading</div>;
    }}
  />,
  document.getElementById('relay')
)
