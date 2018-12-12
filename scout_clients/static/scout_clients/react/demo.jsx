import React, { Component } from 'react';
import { Provider } from "redux-zero/react";
import ReactDOM from 'react-dom';
import styles from './demo.css';

import { ButtonCounter } from './components/button-counter';
import { SpotsList } from './components/spots-list';

import store from "./store";
import Counter from "./components/counter";

console.log("I am React!")

ReactDOM.render(
  <Provider store={store}>
  <div className = "col-lg-12">
    <h2>React</h2>
    <ButtonCounter />
    <Counter />
    <SpotsList />
  </div>
  </Provider>,
  document.getElementById('react_demo')
)
