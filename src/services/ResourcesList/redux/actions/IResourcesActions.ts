import { IAction, IActionPayload } from '../../../CreateAction';
import { IListResponse } from '../../interfaces/IResourcesListService';
import { RESOURCES_ACTION_TYPES } from './resourcesActionTypes';

export type IResourcesActions =
  | IActionPayload<IGetResourcesSuccess, RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS>
  | IActionPayload<string, RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED>
  | IAction<RESOURCES_ACTION_TYPES.GET_RESOURCES>;

export interface IGetResourcesSuccess {
  data: IListResponse;
}
