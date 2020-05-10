import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getResourcesAction } from '../../services/ResourcesList/redux/actions/resourcesActions';
import {
  resourcesErrorSelector,
  resourcesInProgressSelector,
} from '../../services/ResourcesList/redux/selectors/resourcesListSelectors';

export function useResourcesList() {
  const dispatch = useDispatch();
  const inProgress = useSelector(resourcesInProgressSelector, shallowEqual);
  const error = useSelector(resourcesErrorSelector, shallowEqual);

  useEffect(() => {
    dispatch(getResourcesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    inProgress,
  };
}
