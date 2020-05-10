import { all } from 'redux-saga/effects';
import { watchAuthEvents } from '../services/AuthService/redux/saga/authSaga';
import { watchResourcesEvents } from '../services/ResourcesList/redux/saga/resourcesSaga';

export function* rootSaga() {
  yield all([watchAuthEvents(), watchResourcesEvents()]);
}
