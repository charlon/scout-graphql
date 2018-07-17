import React, { Component } from 'react';

const styles = {
  marginBottom: '25px'
}

export class ButtonCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  count: 0,
                  blah: "This is extra text!"
                 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({count: this.state.count + 1});
  }

  render() {

    console.log("button counter rendered!");

    return (
      <div>
        <div>
          <small className="text-muted">The following component...</small>
        </div>
        <div style={styles} className="my-3 p-3 bg-white rounded box-shadow">
          <h6 className="border-bottom border-gray pb-2 mb-0">Button Component</h6>
          <div className="pt-3">
            <button onClick={ this.incrementCount } type="button" className="btn btn-outline-secondary btn-sm blah">You clicked me {this.state.count} times. {this.state.blah} (exported react component)</button>
          </div>
        </div>
      </div>
    );
  }

};
