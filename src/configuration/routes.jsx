import React from 'react';
import {Route, Switch} from 'react-router';
import * as paths from './paths';

// GUARDIANS
import isUser from './guardians/isUser';
import isNotUser from './guardians/isNotUser';

// PAGES
import NavigationWrapper from '../containers/NavigationWrapper';
import LogInPage from '../containers/LogInPage';
import DashboardPage from '../containers/DashboardPage';

const routes = (
    <NavigationWrapper>
        <Switch>
            {/* AUTH */}
            <Route exact path={paths.LOGIN_PAGE} render={() => isNotUser(<LogInPage/>)}/>
            {/* DASHBOARD */}
            <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<DashboardPage/>)}/>
        </Switch>
    </NavigationWrapper>
);

export default routes;
