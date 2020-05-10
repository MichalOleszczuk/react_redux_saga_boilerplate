import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { IActionPayload } from '../../../CreateAction';
import { AuthService } from '../../AuthService';
import { ISignInResponse } from '../../interfaces/IAuthService';
import { signInFailedAction, signInSuccessAction } from '../actions/authActions';
import { AUTH_ACTION_TYPES } from '../actions/authActionTypes';
import { ISignInAction } from '../actions/IAuthActions';

export function* signInSaga({ payload }: IActionPayload<ISignInAction>) {
  try {
    const { email, password, callback } = payload;
    const { data } = (yield call(AuthService.signIn, { email, password })) as AxiosResponse<ISignInResponse>;
    yield put(signInSuccessAction(data));
    yield call(callback);
  } catch (error) {
    console.error(error);
    yield put(signInFailedAction());
  }
}

export function* watchAuthEvents() {
  yield takeLatest(AUTH_ACTION_TYPES.SIGN_IN, signInSaga);
}
