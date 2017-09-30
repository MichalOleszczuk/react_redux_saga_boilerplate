import React from 'react';
import {Route} from 'react-router';
import Dashboard from '../components/Dashboard';
import {DASHBOARD_PAGE} from './paths';
import isLoggedIn from './guardians/isLoggedIn';

const routes = (
    <Route exact path={DASHBOARD_PAGE} render={() => isLoggedIn(<Dashboard/>)}/>
);

export default routes;
