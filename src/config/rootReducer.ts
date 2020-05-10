import { combineReducers } from 'redux';
import { authReducer } from '../services/AuthService/redux/authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});
