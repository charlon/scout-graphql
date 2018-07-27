import React, { Component } from 'react';

const styles = {
  marginBottom: '25px'
}

export class SpotsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  title: 'All Spooots',
                  spots: window.props
                 };
  }

  render() {

    //console.log(this.state.spots);
    console.log("spots list rendered!");

    return (
      <div>
        <div>
          <small className="text-muted">The following component...</small>
        </div>

        <div style={styles} className="my-3 p-3 bg-white rounded box-shadow">
          <h6 className="border-bottom border-gray pb-2 mb-0">All Spots</h6>
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
        </div>
      </div>
    );

  }
}
