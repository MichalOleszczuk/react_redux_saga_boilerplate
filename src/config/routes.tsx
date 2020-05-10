import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import NotFoundPage from '../views/NotFound/NotFoundPage';
import SignIn from '../views/SignIn/SignIn';
import isAuthenticated from './guardians/isAuthenticated';
import isLoggedIn from './guardians/isLoggedIn';
import { DASHBOARD_PAGE, NOT_FOUND_PAGE, SIGN_IN_PAGE } from './paths';

/**
 * Routes configuration for route
 * @constant
 * If you would like to nest routes with IndexRoute look at this example
 * https://stackoverflow.com/a/37491381
 */
const routes = (
  <Switch>
    <Route exact path={DASHBOARD_PAGE} render={(props) => isAuthenticated(<Dashboard {...props} />)} />
    <Route exact path={SIGN_IN_PAGE} render={(props) => isLoggedIn(<SignIn {...props} />)} />
    <Route path={NOT_FOUND_PAGE} render={(props) => <NotFoundPage {...props} />} />
  </Switch>
);

export default routes;
