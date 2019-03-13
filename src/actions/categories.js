import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  EDIT_CATEGORY_START,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE
} from './types';

import { serverHandshake } from './auth';

export const fetchCategories = () => async dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START });
  try {
    const success = await serverHandshake().get('/categories');
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
    return error;
  }
};

export const addCategory = name => async dispatch => {
  dispatch({ type: ADD_CATEGORY_START });
  try {
    const success = await serverHandshake(true).post('/categories', name);
    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAILURE, payload: error });
    return error;
  }
};

export const editCategory = (id, name) => async dispatch => {
  dispatch({ type: EDIT_CATEGORY_START });
  try {
    const success = await serverHandshake().put('/categories', { id, name });
    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: EDIT_CATEGORY_FAILURE, payload: error });
    return error;
  }
};

export const deleteCategory = id => async dispatch => {
  dispatch({ type: DELETE_CATEGORY_START });
  try {
    const success = await serverHandshake().delete('/categories', id);
    dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: DELETE_CATEGORY_FAILURE, payload: error });
    return error;
  }
};
