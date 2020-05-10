import { RootState } from '../../../../config/rootReducer';

export const authSelector = (state: RootState) => state.auth;
export const isAuthenticatedSelector = (state: RootState) => authSelector(state).token;
export const authErrorSelector = (state: RootState) => authSelector(state).error;
export const authInProgressSelector = (state: RootState) => authSelector(state).inProgress;
