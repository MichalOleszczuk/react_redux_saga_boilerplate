import React from 'react';
import {Route} from 'react-router';
import Dashboard from '../components/Dashboard';
import {DASHBOARD_PAGE} from './paths';
import {isUser} from './guardians/IsUser';

const routes = (
    <Route exact path={DASHBOARD_PAGE} render={() => isUser(<Dashboard/>)}/>
);

export default routes;
