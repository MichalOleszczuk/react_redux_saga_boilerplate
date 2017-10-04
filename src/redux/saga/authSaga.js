import {take, put, all, call} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
// import {API_URL} from '../../configuration/config';
// import request, {POST} from '../../services/request';

export function *logIn() {
    while (true) {
        try {
            const {payload: {data, callback}} = yield take(actionTypes.LOG_IN);
            yield put({type: actionTypes.LOG_IN_IN_PROGRESS});
            // const response = yield request(POST, API_URL + 'auth/', data);
            // yield put({type: actionTypes.LOG_IN_SUCCESS, payload: response});
            yield put({type: actionTypes.LOG_IN_SUCCESS});
            yield call(callback);
        } catch (e) {
            console.error(e);
            yield put({type: actionTypes.LOG_IN_FAILED, error: e});
        }
    }
}

export function *logOut() {
    while (true) {
        try {
            const {payload: {callback}} = yield take(actionTypes.LOG_OUT);
            yield put({type: actionTypes.LOG_OUT_IN_PROGRESS});
            yield put({type: actionTypes.LOG_OUT_SUCCESS});
            yield call(callback);
        } catch (e) {
            console.error(e);
            yield put({type: actionTypes.LOG_OUT_FAILED, error: e});
        }
    }
}

export default function *auth() {
    yield all([
        logIn(),
        logOut(),
    ]);
}
