import { AxiosPromise } from 'axios';
import { ApiService } from '../ApiService';
import { ISignInReqData, ISignInResponse } from './interfaces/IAuthService';

export interface IAuthService {
  signIn: (reqData: ISignInReqData) => AxiosPromise<ISignInResponse>;
  signOut: () => AxiosPromise<unknown>;
}

export const AuthService: IAuthService = {
  signIn(reqData) {
    return ApiService.post('/login', reqData);
  },
  signOut() {
    return ApiService.post('/signOut');
  },
};
