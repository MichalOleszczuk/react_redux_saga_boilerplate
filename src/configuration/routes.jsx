import React from 'react';
import {Route, Switch} from 'react-router';
import * as paths from './paths';

// GUARDIANS
import isUser from './guardians/IsUser';
import isNotUser from './guardians/IsNotUser';

// PAGES
import NavigationWrapper from '../containers/NavigationWrapper';
import LogInPage from '../containers/LogInPage';
import DashboardPage from '../containers/DashboardPage';
import NotFoundPage from '../containers/NotFoundPage';
import UnauthorizedPage from '../containers/UnauthorizedPage';

const routes = (
    <NavigationWrapper>
        <Switch>
            {/* AUTH */}
            <Route exact path={paths.LOGIN_PAGE} render={() => isNotUser(<LogInPage/>)}/>
            {/* DASHBOARD */}
            <Route exact path={paths.DASHBOARD_PAGE} render={() => isUser(<DashboardPage/>)}/>
            {/* OTHER */}
            <Route exact path={paths.UNAUTHORIZED_PAGE} render={() => <UnauthorizedPage/>}/>
            <Route render={() => <NotFoundPage/>}/>
        </Switch>
    </NavigationWrapper>
);

export default routes;
