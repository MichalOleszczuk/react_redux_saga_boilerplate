import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export interface IApiService {
  get: (url: string, config?: AxiosRequestConfig) => AxiosPromise<any>;
  post: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise<any>;
  put: (url: string, data: any, config?: AxiosRequestConfig) => AxiosPromise<any>;
  patch: (url: string, data: any, config?: AxiosRequestConfig) => AxiosPromise<any>;
  delete: (url: string, config?: AxiosRequestConfig) => AxiosPromise<any>;
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const ApiService: IApiService = {
  get(url, config) {
    return axios.get(url, config);
  },
  post(url, data, config) {
    return axios.post(url, data, config);
  },
  put(url, data, config) {
    return axios.put(url, data, config);
  },
  patch(url, data, config) {
    return axios.patch(url, data, config);
  },
  delete(url, config) {
    return axios.delete(url, config);
  },
};
