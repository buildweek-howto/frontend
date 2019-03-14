import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS, EDIT_POST_SUCCESS, DELETE_POST_SUCCESS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case EDIT_POST_SUCCESS:
      const { id, changedPost } = action.payload;
      return state.map(post =>
        post.id === id
          ? changedPost
          : post
      );
    case FETCH_POSTS_SUCCESS:
    case ADD_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const getCategoryPosts = ({ posts_categories }, id) =>
  posts_categories.reduce((acc, cur) => (cur.category_id === id ? [...acc, cur.post_id] : acc), []);

const getPostsBySearch = (state, filter) => {
  const pattern = new RegExp(filter, 'i');
  return {
    ...state,
    allPosts: state.allPosts.filter(({ title, body }) => pattern.test(title) || pattern.test(body))
  }
};

const getPostsByCategory = (state, id) => {
  console.log(state);
  const validPosts = getCategoryPosts(state, id);
  return {
    ...state,
    allPosts: state.allPosts.filter(post => validPosts.includes(post.id))
  };
};

const getPostsByUser = (state, userId) => ({
  ...state,
  allPosts: state.allPosts.filter(post => post.category_id === userId)
});

export const getFilteredPosts = (state, { searchInput, category, user }) => {
  if (state.length === 0) return state;
  if (searchInput) state = getPostsBySearch(state, searchInput);
  if (category) state = getPostsByCategory(state, category);
  if (user) state = getPostsByUser(state, user);
  return state;
};

export const getPostCategories = ({ posts_categories }, id) =>
  posts_categories.reduce((acc, cur) => (cur.post_id === id ? [...acc, cur.category_id] : acc), []);
