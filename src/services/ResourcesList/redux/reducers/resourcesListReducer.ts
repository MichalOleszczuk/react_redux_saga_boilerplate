import { IResource } from '../../interfaces/IResourcesListService';
import { IResourcesActions } from '../actions/IResourcesActions';
import { RESOURCES_ACTION_TYPES } from '../actions/resourcesActionTypes';

export interface IResourcesListReducer {
  error: string;
  resources: Array<IResource>;
  inProgress: boolean;
}

export const RESOURCES_LIST_DEFAULT_STATE = {
  error: '',
  resources: [],
  inProgress: false,
};

export const resourcesListReducer = (state: IResourcesListReducer = RESOURCES_LIST_DEFAULT_STATE, action: IResourcesActions) => {
  switch (action.type) {
    case RESOURCES_ACTION_TYPES.GET_RESOURCES: {
      return {
        ...state,
        error: '',
        inProgress: true,
      };
    }
    case RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS: {
      const {
        data: { data },
      } = action.payload;
      return {
        ...state,
        error: '',
        resources: data,
        inProgress: false,
      };
    }
    case RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED: {
      return {
        ...state,
        error: action.payload,
        inProgress: false,
      };
    }
    default: {
      return state;
    }
  }
};
