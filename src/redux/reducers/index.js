import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import dashboard from './dashboardReducer';
import auth from './authReducer';

const root = combineReducers({
    dashboard,
    auth,
    routing: routerReducer,
});

export default root;
