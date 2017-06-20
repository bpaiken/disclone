import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session_form/login_container';
import CreateAccountContainer from './session_form/create_account_container';
import LogoutTestContainer from './session_form/logout_test_container';
import { Route } from 'react-router-dom';
import { LoggedAuthRoute, NotLoggedAuthRoute } from '../util/route_util';

export default () => (
  <div>
    {/*<LoggedAuthRoute exact path="/login" redirect="/"  component={LogoutTestContainer} />
    <LoggedAuthRoute exact path="/register" redirect="/" component={CreateAccountContainer}/>*/}
    <div className="session-wrapper"> 
      <LoggedAuthRoute path ="/login" component={LoginContainer} redirect="/" />
      <LoggedAuthRoute path ="/register" component={CreateAccountContainer} redirect="/" />
    </div>
    <NotLoggedAuthRoute exact path="/" redirect="/login" component={LogoutTestContainer}/>
  </div>
);

// const AuthBackground = () => (
//   <img  src="https://danbooru.donmai.us/data/__diablo_3__9507229cda7d4678218a764d57a72239.jpg" alt=""/>
// )

    // <GreetingContainer />