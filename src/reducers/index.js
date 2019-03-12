import { combineReducers } from 'redux';

import categories from './categories';
import currentUser from './currentUser';
import error from './error';
import posts from './posts';
import status from './status';
import users from './users';

export default combineReducers({
  categories,
  currentUser,
  error,
  posts,
  status,
  users
});
