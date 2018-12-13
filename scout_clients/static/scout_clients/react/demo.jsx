import React, { Component } from 'react';
import { Provider } from "redux-zero/react";
import ReactDOM from 'react-dom';

import styles from './demo.css';
import store from "./store";

import { ButtonCounter } from './components/button-counter';
import { SpotsList } from './components/spots-list';
import Counter from "./components/counter";

console.log("I am React!")

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: ""};
  }

  componentDidMount() {
    this.updateTitle()
  }

  updateTitle(newTitle = "Working Title") {
    this.setState({
      title: newTitle
    });
  }

  render() {
    return (
      <h2>{this.state.title}</h2>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div className = "col-lg-12">
      <Welcome ref={(welcomeComponent) => {window.welcomeComponent = welcomeComponent}} />
      <ButtonCounter />
      <Counter />
      <SpotsList />
    </div>
  </Provider>,
  document.getElementById('react_demo')
)
