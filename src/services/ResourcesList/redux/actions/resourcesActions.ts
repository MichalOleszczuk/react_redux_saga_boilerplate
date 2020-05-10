import CreateAction, { CreateActionWithPayload } from '../../../CreateAction';
import { IGetResourcesSuccess } from './IResourcesActions';
import { RESOURCES_ACTION_TYPES } from './resourcesActionTypes';

export const getResourcesAction = CreateAction(RESOURCES_ACTION_TYPES.GET_RESOURCES);
export const getResourcesSuccessAction = CreateActionWithPayload<IGetResourcesSuccess>(
  RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS,
);
export const getResourcesFailedAction = CreateActionWithPayload<string>(RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED);
