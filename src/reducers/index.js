import { combineReducers } from 'redux';

import categories from './categories';
import currentUser from './currentUser';
import posts from './posts';
import users from './users';

export default combineReducers({
  categories,
  currentUser,
  posts,
  status,
  users
});
