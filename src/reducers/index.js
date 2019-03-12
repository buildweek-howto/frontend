import { combineReducers } from 'redux';

import users from './users';
import categories from './categories';
import currentUser from './currentUser';
import posts from './posts';

export default combineReducers({
  categories,
  currentUser,
  posts,
  status,
});
