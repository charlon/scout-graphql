import React, { Component } from 'react';

export class ButtonCounter extends React.Component {

  constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
      this.setState({count: this.state.count + 1});
    }

    render() {
        return (
          <div>
            <button onClick={ this.incrementCount }>You clicked me {this.state.count} times.. (exported react component)</button>
          </div>
        );
    }
};
