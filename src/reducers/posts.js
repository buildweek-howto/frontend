import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS, DELETE_POST_SUCCESS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
    case ADD_POST_SUCCESS:
    case EDIT_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const getFilterPostsByUser = (state, userId) => {
  if (!userId) {
    return state;
  } else {
    return state.filter(post => post.category_id === userId);
  }
};
