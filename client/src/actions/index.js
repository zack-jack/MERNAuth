import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const register = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/user/register', formProps);

    // Dispatch auth token to redux store
    dispatch({ type: AUTH_USER, payload: response.data.token });

    // Save token to localStorage
    localStorage.setItem('token', response.data.token);

    // Call the callback function (ie redirect)
    callback();
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({ type: AUTH_ERROR, payload: errors });
  }
};
