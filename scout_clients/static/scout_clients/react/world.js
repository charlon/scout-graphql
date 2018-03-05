import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './world.css'

function World(props) {
  // build the template
  const userList = props.users.map((user, i) =>
    <li key={i}><a href={'/user/${user.username}/'}>{user.username}</a></li>
  );
  return (
    <div>
      <h1 className='world-header'>World!</h1>
      <ul>
        {userList}
      </ul>
    </div>
  );
}

// mock the data to be displayed as props
const users = [
  {'username': 'alice'},
  {'username': 'jennifer'},
  {'username': 'bob'},
  {'username': 'jason'},
  {'username': 'fred'},
 ];

ReactDOM.render(
  <World users={users} />,    // gets the props that are passed in the template
  document.getElementById('world')     // a reference to the #react div that we render to
);
