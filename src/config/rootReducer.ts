import { combineReducers } from 'redux';
import { authReducer } from '../services/AuthService/redux/authReducer';
import { resourcesListReducer } from '../services/ResourcesList/redux/reducers/resourcesListReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  resources: resourcesListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
