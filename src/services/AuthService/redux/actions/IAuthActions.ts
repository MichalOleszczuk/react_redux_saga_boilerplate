import { IAction, IActionPayload } from '../../../CreateAction';
import { AUTH_ACTION_TYPES } from './authActionTypes';

export type IAuthActions =
  | IActionPayload<AUTH_ACTION_TYPES.SIGN_IN_SUCCESS>
  | IAction<AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export interface ISignInAction {
  email: string;
  password: string;
  callback: () => void;
}

export interface ISignInSuccessAction {
  token: string;
}
