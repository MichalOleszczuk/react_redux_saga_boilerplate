import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticatedSelector } from '../../services/AuthService/redux/selectors/authSelectors';
import { HOME_PAGE } from '../paths';
import { store } from '../store';

export function isLoggedIn(component: JSX.Element) {
  const state = store.getState();
  const isLoggedIn = isAuthenticatedSelector(state);

  if (isLoggedIn) {
    return <Redirect to={HOME_PAGE} />;
  } else {
    return component;
  }
}
