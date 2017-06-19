import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session_form/login_container';
import CreateAccountContainer from './session_form/create_account_container';
import { Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

export default () => (
  <div>
    <h1>Hello Disclone</h1>
    <Route exact path="/" component={LoginContainer}/>
    <Route exact path="/register" component={CreateAccountContainer}/>
  </div>
);

    // <GreetingContainer />