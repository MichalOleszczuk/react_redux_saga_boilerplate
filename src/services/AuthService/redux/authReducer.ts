import { AUTH_ACTION_TYPES } from './actions/authActionTypes';
import { IAuthActions } from './actions/IAuthActions';

export const AUTH_DEFAULT_STATE = {
  token: false,
  error: '',
  inProgress: false,
};

export const authReducer = (state = AUTH_DEFAULT_STATE, action: IAuthActions) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN: {
      return {
        ...state,
        error: '',
        inProgress: true,
      };
    }
    case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        token: true,
        inProgress: false,
      };
    }
    case AUTH_ACTION_TYPES.SIGN_OUT: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        token: false,
        inProgress: false,
      };
    }
    case AUTH_ACTION_TYPES.SIGN_IN_FAILED: {
      return {
        ...state,
        token: false,
        error: action.payload,
        inProgress: false,
      };
    }
    default: {
      return state;
    }
  }
};
