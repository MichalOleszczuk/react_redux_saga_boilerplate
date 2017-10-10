import {take, put, all, call, fork} from 'redux-saga/effects';
import {auth} from '../actions/actionTypes';
// import {API_URL} from '../../configuration/config';
// import request, {POST} from '../../services/request';

export function *logIn() {
    while (true) {
        try {
            const {payload: {data, callback}} = yield take(auth.LOG_IN);
            yield put({type: auth.LOG_IN_IN_PROGRESS});
            // const response = yield request(POST, API_URL + 'auth/', data);
            yield put({type: auth.LOG_IN_SUCCESS, payload: data});
            yield put({type: auth.LOG_IN_SUCCESS});
            yield call(callback);
        } catch (e) {
            console.error(e);
            yield put({type: auth.LOG_IN_FAILED, error: e});
        }
    }
}

export function *logOut() {
    while (true) {
        try {
            const {payload: {callback}} = yield take(auth.LOG_OUT);
            yield put({type: auth.LOG_OUT_IN_PROGRESS});
            yield put({type: auth.LOG_OUT_SUCCESS});
            yield call(callback);
        } catch (e) {
            console.error(e);
            yield put({type: auth.LOG_OUT_FAILED, error: e});
        }
    }
}

export default function *authSaga() {
    yield all([
        fork(logIn),
        fork(logOut),
    ]);
}
