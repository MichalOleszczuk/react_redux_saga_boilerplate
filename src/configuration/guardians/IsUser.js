// import {get, save} from '../../services/persist';
import {store} from '../../index';
import * as React from 'react';
import {Redirect} from 'react-router';
import idx from 'idx';
import {LOGIN_PAGE} from '../paths';

export function isUser(component) {
    if(idx(store, x => x.getState().auth.token)) {
        return component;
    } else {
        return <Redirect to={LOGIN_PAGE}/>;
    }
}

