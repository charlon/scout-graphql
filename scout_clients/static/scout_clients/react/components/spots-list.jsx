import React, { Component } from 'react';
import axios from "axios";

const styles = {
  marginBottom: '25px'
}

export class SpotsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  title: 'All Spooots',
                  loading: true,
                  spots: []
                 };
  }

  componentDidMount() {
    this.state.loading = true;
    axios
      .get('/api/v1/spots/?format=json')
      .then(response => {
        this.setState({
          spots: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {

    let content;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else {
      content =
      <ul className="media-list react-list">
        {this.state.spots.map( spot => {
          return (
            <li key={spot.id} className="media">
              <div className="media-left">
                <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{spot.name}</h4>
                <p>{spot.building_name}<br/>
                {spot.latitude}, {spot.longitude}</p>
              </div>
            </li>
            );
      })}
    </ul>
    }

    return (
     <div style={styles}>
       <h2 className='react-header'>All Spots</h2>
       {content}
     </div>
    );

  }
}
