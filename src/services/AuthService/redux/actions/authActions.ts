import CreateAction, { CreateActionWithPayload } from '../../../CreateAction';
import { AUTH_ACTION_TYPES } from './authActionTypes';
import { ISignInAction, ISignInSuccessAction, ISignOutAction } from './IAuthActions';

export const signInAction = CreateActionWithPayload<ISignInAction>(AUTH_ACTION_TYPES.SIGN_IN);
export const signInSuccessAction = CreateActionWithPayload<ISignInSuccessAction>(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS);
export const signInFailedAction = CreateActionWithPayload<string>(AUTH_ACTION_TYPES.SIGN_IN_FAILED);
export const signOutAction = CreateActionWithPayload<ISignOutAction>(AUTH_ACTION_TYPES.SIGN_OUT);
export const signOutSuccessAction = CreateAction(AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS);
export const signOutFailedAction = CreateActionWithPayload<string>(AUTH_ACTION_TYPES.SIGN_OUT_FAILED);
