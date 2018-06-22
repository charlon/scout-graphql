import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './demo.css';

import { ButtonCounter } from './components/button-counter';
import { SpotsList } from './components/spots-list';

ReactDOM.render(
  <div className = "col-lg-12">
    <ButtonCounter />
    <SpotsList />
  </div>,
  document.getElementById('react_demo')
)
