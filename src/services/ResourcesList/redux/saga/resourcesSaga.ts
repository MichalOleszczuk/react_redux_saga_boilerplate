import { AxiosResponse } from 'axios';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { IAction } from '../../../CreateAction';
import { IListResponse } from '../../interfaces/IResourcesListService';
import { ResourcesListService } from '../../ResourcesListService';
import { getResourcesFailedAction, getResourcesSuccessAction } from '../actions/resourcesActions';
import { RESOURCES_ACTION_TYPES } from '../actions/resourcesActionTypes';

export function* getResourcesSaga(_action: IAction) {
  try {
    const { data } = (yield call(ResourcesListService.getResourcesList)) as AxiosResponse<IListResponse>;
    yield delay(2000);
    yield put(getResourcesSuccessAction({ data }));
  } catch (error) {
    console.error(error);
    yield put(getResourcesFailedAction(error.message));
  }
}

export function* watchResourcesEvents() {
  yield takeLatest(RESOURCES_ACTION_TYPES.GET_RESOURCES, getResourcesSaga);
}
