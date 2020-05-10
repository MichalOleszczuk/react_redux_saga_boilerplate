import { History } from 'history';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { SIGN_IN_PAGE } from '../../../config/paths';
import { signOutAction } from '../../../services/AuthService/redux/actions/authActions';
import { authInProgressSelector } from '../../../services/AuthService/redux/selectors/authSelectors';

export function useNavBar(history: History) {
  const dispatch = useDispatch();
  const inProgress = useSelector(authInProgressSelector, shallowEqual);

  const callback = () => {
    history.push(SIGN_IN_PAGE);
  };

  const signOut = () => {
    dispatch(signOutAction({ callback }));
  };

  return {
    inProgress,
    signOut,
  };
}
