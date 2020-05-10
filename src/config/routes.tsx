import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Home/Home';
import NotFoundPage from '../views/NotFound/NotFoundPage';
import ResourcesList from '../views/ResourcesList/ResourcesList';
import SignIn from '../views/SignIn/SignIn';
import { isAuthenticated } from './guardians/isAuthenticated';
import { isLoggedIn } from './guardians/isLoggedIn';
import { HOME_PAGE, NOT_FOUND_PAGE, RESOURCES_LIST_PAGE, SIGN_IN_PAGE } from './paths';

/**
 * Routes configuration for route
 * @constant
 */
const routes = (
  <Switch>
    <Route
      exact
      path={HOME_PAGE}
      render={(props) =>
        isAuthenticated(
          <Dashboard {...props}>
            <Home {...props} />
          </Dashboard>,
        )
      }
    />
    <Route
      exact
      path={RESOURCES_LIST_PAGE}
      render={(props) =>
        isAuthenticated(
          <Dashboard {...props}>
            <ResourcesList {...props} />
          </Dashboard>,
        )
      }
    />
    <Route exact path={SIGN_IN_PAGE} render={(props) => isLoggedIn(<SignIn {...props} />)} />
    <Route path={NOT_FOUND_PAGE} render={(props) => <NotFoundPage {...props} />} />
  </Switch>
);

export default routes;
