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
    return (
      <div style={styles}>
        <button onClick={ this.incrementCount }>You clicked me {this.state.count} times. {this.state.blah} (exported react component)</button>
      </div>
    );
  }

};
