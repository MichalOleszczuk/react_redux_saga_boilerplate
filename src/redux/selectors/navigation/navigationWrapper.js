import { createSelector, createStructuredSelector } from 'reselect';
import { getNavigation } from './stateSelector';

export const isNavigationDisabled = () => createSelector(
    getNavigation,
    navigation => navigation.disabled
);

const mapStateToProps = () => createStructuredSelector({
    disabled: isNavigationDisabled(),
});

export default mapStateToProps;
