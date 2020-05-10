import React, { memo } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { HOME_PAGE } from '../../config/paths';
import Home from '../Home/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

export interface IDashboardProps extends RouteComponentProps {
  children: React.ReactNode;
}

function Dashboard(props: RouteComponentProps) {
  return (
    <div className='vh-100'>
      <Route path={HOME_PAGE} render={(props) => <NavBar {...props} />} />
      <div id='dashboardContent'>
        <Switch>
          <Route exact path={HOME_PAGE} render={(props) => <Home {...props} />} />
        </Switch>
      </div>
      <Route path={HOME_PAGE} render={(props) => <Footer {...props} />} />
    </div>
  );
}

export default memo(Dashboard);
