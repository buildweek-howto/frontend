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

export const getPostsByUser = (state, userId) => {
  if (!userId) {
    return state;
  } else {
    return state.filter(post => post.category_id === userId);
  }
};

export const getPostCategories = ({posts_categories}, id) => posts_categories.reduce(
  (acc,cur) => cur.post_id === id ? [...acc, cur.category_id] : acc,
[]);

export const getCategoryPosts = ({posts_categories}, id) => posts_categories.reduce(
  (acc, cur) => cur.category_id === id ? [ ...acc, cur.post_id ] : acc,
[]);

export const getPostsByCategory = (state, id) => {
  const validPosts = getCategoryPosts(state, id);
  return {
    ...state,
    allPosts: state.allPosts.filter(post => validPosts.includes(post.id))
  }
}
