import axios from 'axios';

import { AUTH_USER } from './types';

export const register = formProps => async dispatch => {
  const response = await axios.post('/user/register', formProps);

  dispatch({ type: AUTH_USER, payload: response.data.token });
};
