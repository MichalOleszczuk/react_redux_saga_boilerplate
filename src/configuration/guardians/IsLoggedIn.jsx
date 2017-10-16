import {get} from '../../services/persist';
import {Redirect} from 'react-router';
import React from 'react';
import {LOGIN_PAGE} from '../paths';

function IsLoggedIn(component) {
    if(get('token')) {
        return component;
    } else {
        return <Redirect to={LOGIN_PAGE}/>;
    }
}

export default IsLoggedIn;
