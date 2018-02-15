import { createSelector, createStructuredSelector } from 'reselect';
import { getNavigation } from './stateSelector';

export const isNavigationDisabled = createSelector(
    getNavigation,
    navigation => navigation.disabled
);

export default createStructuredSelector({
    disabled: isNavigationDisabled,
});
