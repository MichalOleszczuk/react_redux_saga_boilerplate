import { all } from 'redux-saga/effects';
import { watchAuthEvents } from '../services/AuthService/redux/saga/authSaga';

export function* rootSaga() {
  yield all([watchAuthEvents()]);
}
