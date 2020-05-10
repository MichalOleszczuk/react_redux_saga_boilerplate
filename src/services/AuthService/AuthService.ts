import { AxiosPromise } from 'axios';
import { ApiService } from '../ApiService';

export interface IAuthService {
  signIn: (reqData: unknown) => AxiosPromise<unknown>;
  signOut: () => AxiosPromise<unknown>;
}

export const AuthService: IAuthService = {
  signIn(reqData) {
    return ApiService.post('/signIn', reqData);
  },
  signOut() {
    return ApiService.post('/signOut');
  },
};
