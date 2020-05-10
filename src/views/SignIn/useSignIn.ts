import { History } from 'history';
import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HOME_PAGE } from '../../config/paths';
import { signInAction } from '../../services/AuthService/redux/actions/authActions';
import { authErrorSelector, authInProgressSelector } from '../../services/AuthService/redux/selectors/authSelectors';

export function useSignIn(history: History) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authErrorSelector, shallowEqual);
  const inProgress = useSelector(authInProgressSelector, shallowEqual);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(!!event.target.value ? event.target.value.toString() : '');
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(!!event.target.value ? event.target.value.toString() : '');
  };

  const callback = () => {
    history.push(HOME_PAGE);
  };

  const onSubmit = () => dispatch(signInAction({ email, password, callback }));

  return { email, onChangeEmail, password, onChangePassword, onSubmit, inProgress, error };
}
