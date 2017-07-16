import React from 'react';
import LoginContainer from './session_form/login_container';
import CreateAccountContainer from './session_form/create_account_container';
import LogoutTestContainer from './session_form/logout_test_container';
import CoreContainer from './core/core_container';
import { Route } from 'react-router-dom';
import { LoggedAuthRoute, NotLoggedAuthRoute, AuthRedirectRoute } from '../util/route_util';

//TODO: improve route logic/ custom routes
export default () => (
  <div>
      <LoggedAuthRoute path ="/login" component={LoginContainer} redirect="/app/directs" />
      <LoggedAuthRoute path ="/register" component={CreateAccountContainer} redirect="/app/directs" />
         <AuthRedirectRoute redirectOne="/app/directs" path="*" />   
    <div className="main-app">
       <NotLoggedAuthRoute path="/" redirect="/login" component={CoreContainer}/> 
       {/* <Route path="/app/directs" component={CoreContainer} />   */}
    </div>
  </div>  
);
