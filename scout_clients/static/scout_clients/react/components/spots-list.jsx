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
      .get('http://curry.aca.uw.edu:8000/spots.json')
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
      content = <div className="pt-3">Loading...</div>;
    } else {
      content =
        <ul className="p-0">
          {this.state.spots.map( spot => {
            return (
              <li key={spot.id} className="media text-muted pt-3">
                   <img src="http://via.placeholder.com/32x32" alt="..." className="mr-2 rounded" />
                   <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                     <strong className="d-block text-gray-dark">{spot.name }</strong>
                     {spot.building_name }<br/>
                     {spot.latitude }, {spot.longitude }</p>
              </li>
            );
          })}
        </ul>
    }

    return (
     <div style={styles}>
       <div>
         <small className="text-muted">The following component...</small>
       </div>
       <div style={styles} className="my-3 p-3 bg-white rounded box-shadow">
         <h6 className="border-bottom border-gray pb-2 mb-0">All Spots</h6>
         {content}
       </div>
     </div>
    );

  }
}
