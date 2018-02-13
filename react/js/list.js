import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="List">

          <h2>React component here</h2>

          <div className="col-lg-6" style={{margintop: '2em'}}>
            <ul className="media-list">
              <li className="media">
                <div className="media-left">
                  <a href="/react/detail/"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href="/react/detail/">Media heading</a></h4>
                  <p>asdfasf</p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  <p>asdfasf</p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  <p>asdfasf</p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  <p>asdfasf</p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  <p>asdfasf</p>
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <a href="#"><img className="media-object" src="http://via.placeholder.com/60x60" alt="..." /></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Media heading</h4>
                  <p>asdfasf</p>
                </div>
              </li>
            </ul>
          </div>

      </div>
    );
  }
}

export default List;
