import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom';

const NotLoggedAuth = ({component: Component, path, redirect, loggedIn}) => (
    <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={redirect} />
    )
  )}/>
);

const LoggedAuth = ({component: Component, path, redirect, loggedIn}) => (
    <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={redirect} />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.currentUser.id)};
};

export const NotLoggedAuthRoute = withRouter(connect(mapStateToProps, null)(NotLoggedAuth));
export const LoggedAuthRoute = withRouter(connect(mapStateToProps, null)(LoggedAuth));