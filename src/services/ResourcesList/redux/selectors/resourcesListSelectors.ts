import { RootState } from '../../../../config/rootReducer';

export const resourcesSelector = (state: RootState) => state.resources;
export const resourcesErrorSelector = (state: RootState) => resourcesSelector(state).error;
export const resourcesListSelector = (state: RootState) => resourcesSelector(state).resources;
export const resourcesInProgressSelector = (state: RootState) => resourcesSelector(state).inProgress;
