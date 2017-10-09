import React from 'react';
import {Route, Switch} from 'react-router';
// import Dashboard from '../components/Dashboard';
import LogInPage from '../containers/LogInPage';
import NavigationWrapper from '../containers/NavigationWrapper';
import {DASHBOARD_PAGE} from './paths';
// import isLoggedIn from './guardians/isLoggedIn';

const routes = (
    <NavigationWrapper>
        <Switch>
            <Route exact path={DASHBOARD_PAGE} render={() => <LogInPage/>}/>
        </Switch>
    </NavigationWrapper>
);

export default routes;
