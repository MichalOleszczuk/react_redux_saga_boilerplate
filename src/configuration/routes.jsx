import React from 'react';
import {Route} from 'react-router';
import Dashboard from '../components/Dashboard';
import LogIn from '../components/authorization/LogIn';
import {DASHBOARD_PAGE} from './paths';
import isLoggedIn from './guardians/isLoggedIn';

const routes = (
    <Route exact path={DASHBOARD_PAGE} render={() => <LogIn/>}/>
);

export default routes;
