import {
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  FETCH_USERS_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORY_FAILURE,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_FAILURE,
  FETCH_POSTS_FAILURE,
  ADD_POST_FAILURE,
  EDIT_POST_FAILURE,
  DELETE_POST_FAILURE
} from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case FETCH_USERS_FAILURE:
    case FETCH_CATEGORIES_FAILURE:
    case ADD_CATEGORY_FAILURE:
    case EDIT_CATEGORY_FAILURE:
    case DELETE_CATEGORY_FAILURE:
    case FETCH_POSTS_FAILURE:
    case ADD_POST_FAILURE:
    case EDIT_POST_FAILURE:
    case DELETE_POST_FAILURE:
      return (action.payload.response && action.payload.response.data) || (action.payload || '?');
    default:
      return '';
  }
};
