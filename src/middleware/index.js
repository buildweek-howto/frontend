import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from '../actions/types';

export const addTokenToLocalStorage = store => next => action => {
  if (action.type === LOGIN_SUCCESS || action.type === SIGNUP_SUCCESS) {
    localStorage.setItem('userToken', action.payload.token);
  }

  next(action);
};
