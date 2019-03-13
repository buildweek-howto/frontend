import { combineReducers } from 'redux';

import categories from './categories';
import currentUser from './currentUser';
import error from './error';
import posts from './posts';
import searchInput from './searchInput';
import status from './status';
import users from './users';

export default combineReducers({
  categories,
  currentUser,
  error,
  posts,
  searchInput,
  status,
  users,
});

export { getPostCategories, getFilteredPosts } from './posts';
