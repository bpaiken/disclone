import React from 'react';
import { Link, Route } from 'react-router-dom';

export default (props) => { 
    return (
    <div>
      Welcome {props.currentUser.username}
      <button onClick={props.logout}>Logout</button>
    </div>
  ); 
}