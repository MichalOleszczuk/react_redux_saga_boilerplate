import { AxiosPromise } from 'axios';
import { ApiService } from '../ApiService';
import { IListResponse } from './interfaces/IResourcesListService';

export interface IResourcesListService {
  getResourcesList: () => AxiosPromise<IListResponse>;
}

export const ResourcesListService: IResourcesListService = {
  getResourcesList() {
    return ApiService.get('/unknown');
  },
};
