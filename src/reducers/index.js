import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import categories from './categories';
import currentUser from './currentUser';

export default combineReducers({
  users,
  currentUser,
  posts,
  categories
});
