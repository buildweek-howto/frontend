import axios from 'axios';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from './types';

export const serverHandshake = (auth) => {
  const options = {
    baseURL: 'https://yanna-howto.herokuapp.com/api',
    //withCredentials: true
  };

  if (auth) {
    const token = localStorage.getItem('userToken');
    options.headers = { Authorization: token };
  }

  return axios.create(options);
};

export const authLogin = creds => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const success = await serverHandshake().post('/auth/login', creds);
    dispatch({ type: LOGIN_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
    return error;
  }
};

export const authSignup = creds => async dispatch => {
  dispatch({ type: SIGNUP_START });
  try {
    const success = await serverHandshake().post('/auth/register', creds);
    dispatch({ type: SIGNUP_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE, payload: error });
    return error;
  }
};
