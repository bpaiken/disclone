import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session_form/login_container';
import CreateAccountContainer from './session_form/create_account_container';
import LogoutTestContainer from './session_form/logout_test_container';
import { Route } from 'react-router-dom';
import { LoggedAuthRoute, NotLoggedAuthRoute } from '../util/route_util';

export default () => (
  <div>
    <h1>Hello Disclone</h1>
    
    {/*<LoggedAuthRoute exact path="/login" redirect="/"  component={LogoutTestContainer} />
    <LoggedAuthRoute exact path="/register" redirect="/" component={CreateAccountContainer}/>*/}
    <LoggedAuthRoute path ="/register" component={CreateAccountContainer} redirect="/" />
    <LoggedAuthRoute path ="/login" component={LoginContainer} redirect="/" />
    <NotLoggedAuthRoute exact path="/" redirect="/login" component={LogoutTestContainer}/>
  </div>
);

    // <GreetingContainer />