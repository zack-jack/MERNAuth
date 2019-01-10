import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const register = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/user/register', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });

    callback();
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({ type: AUTH_ERROR, payload: errors });
  }
};