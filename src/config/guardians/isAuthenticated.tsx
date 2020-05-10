import React from 'react';
import { Redirect } from 'react-router';
import { isAuthenticatedSelector } from '../../services/AuthService/redux/selectors/authSelectors';
import { SIGN_IN_PAGE } from '../paths';
import { store } from '../store';

/**
 * Example guardian guarding route.
 * @param {component} JSX.Element
 * @returns JSX.Element
 * To check guardian pattern you can visit
 * https://www.thegreatcodeadventure.com/jwt-auth-with-phoenix-and-react-router-4/
 */
export function isAuthenticated(component: JSX.Element) {
  const state = store.getState();
  const isAuthenticated = isAuthenticatedSelector(state);

  if (isAuthenticated) {
    return component;
  } else {
    return <Redirect to={SIGN_IN_PAGE} />;
  }
}
