import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_CATEGORY_START,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  EDIT_CATEGORY_START,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return { ...state, signingUp: true };
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
      return { ...state, signingUp: false };
    case LOGIN_START:
      return { ...state, loggingIn: true };
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return { ...state, loggingIn: false };
    case FETCH_CATEGORIES_START:
      return { ...state, fetchingCategories: true };
    case FETCH_CATEGORIES_SUCCESS:
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, fetchingCategories: false };
    case FETCH_USERS_START:
      return { ...state, fetchingUsers: true };
    case FETCH_USERS_SUCCESS:
    case FETCH_USERS_FAILURE:
      return { ...state, fetchingUsers: false };
    case ADD_CATEGORY_START:
      return { ...state, addingCategory: true };
    case ADD_CATEGORY_SUCCESS:
    case ADD_CATEGORY_FAILURE:
      return { ...state, addingCategory: false };
    case EDIT_CATEGORY_START:
      return { ...state, editingCategory: true };
    case EDIT_CATEGORY_SUCCESS:
    case EDIT_CATEGORY_FAILURE:
      return { ...state, editingCategory: false };
    case DELETE_CATEGORY_START:
      return { ...state, deletingCategory: true };
    case DELETE_CATEGORY_SUCCESS:
    case DELETE_CATEGORY_FAILURE:
      return { ...state, deletingCategory: false };
    default:
      return state;
  }
};
