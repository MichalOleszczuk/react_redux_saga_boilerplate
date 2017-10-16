// import {get, save} from '../../services/persist';
import {store} from '../../index';
import * as React from 'react';
import {Redirect} from 'react-router';
import idx from 'idx';
import {DASHBOARD_PAGE} from '../paths';

export function IsNotUser(component) {
    if(idx(store, x => x.getState().auth.token)) {
        return <Redirect to={DASHBOARD_PAGE}/>;
    } else {
        return component;
    }
}

export default IsNotUser;
