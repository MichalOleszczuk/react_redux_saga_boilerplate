import { IAction, IActionPayload } from '../../../CreateAction';
import { AUTH_ACTION_TYPES } from './authActionTypes';

export type IAuthActions =
  | IActionPayload<ISignInAction, AUTH_ACTION_TYPES.SIGN_IN_SUCCESS>
  | IActionPayload<string, AUTH_ACTION_TYPES.SIGN_IN_FAILED>
  | IAction<AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS>
  | IAction<AUTH_ACTION_TYPES.SIGN_IN>
  | IAction<AUTH_ACTION_TYPES.SIGN_OUT>
  | IActionPayload<string, AUTH_ACTION_TYPES.SIGN_IN_FAILED>;

export interface ISignInAction {
  email: string;
  password: string;
  callback: () => void;
}

export interface ISignInSuccessAction {
  token: string;
}

export interface ISignOutAction {
  callback: () => void;
}
