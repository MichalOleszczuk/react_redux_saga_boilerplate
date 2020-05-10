import { RootState } from '../../../../config/rootReducer';

export const authSelector = (state: RootState) => state.auth;
export const isAuthenticatedSelector = (state: RootState) => authSelector(state).token;
