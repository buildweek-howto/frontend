import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from './types';

import { serverHandshake } from './auth';

export const fetchPosts = () => async dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  try {
    const success = await serverHandshake().get('/auth/posts');
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error });
    return error;
  }
};

export const addPost = postData => async dispatch => {
  dispatch({ type: ADD_POST_START });
  try {
    const success = await serverHandshake().post('/auth/posts', postData);
    dispatch({ type: ADD_POST_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: ADD_POST_FAILURE, payload: error });
    return error;
  }
};

export const editPost = (id, postData) => async dispatch => {
  dispatch({ type: EDIT_POST_START });
  try {
    const success = await serverHandshake().put('/auth/posts', { id, postData });
    dispatch({ type: EDIT_POST_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: EDIT_POST_FAILURE, payload: error });
    return error;
  }
};

export const deletePost = id => async dispatch => {
  dispatch({ type: DELETE_POST_START });
  try {
    const success = await serverHandshake().delete('/auth/posts', id);
    dispatch({ type: DELETE_POST_SUCCESS, payload: success.data });
    return success;
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILURE, payload: error });
    return error;
  }
};
