import { AUTH_ACTION_TYPES } from './actions/authActionTypes';

export const AUTH_DEFAULT_STATE = {
  token: false,
};

export const authReducer = (state = AUTH_DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        token: true,
      };
    }
    case AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        token: false,
      };
    }
    default: {
      return state;
    }
  }
};
