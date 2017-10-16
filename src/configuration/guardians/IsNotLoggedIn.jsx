import {get} from '../../services/persist';
import {Redirect} from 'react-router';
import React from 'react';
import {DASHBOARD_PAGE} from '../paths';

// Prevent logged in person from entering login page
function IsNotLoggedIn(component) {
    if(get('token')) {
        return <Redirect to={DASHBOARD_PAGE}/>;
    } else {
        return component;
    }
}

export default IsNotLoggedIn;
