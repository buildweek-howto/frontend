import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import categories from './categories';

export default combineReducers({
  users,
  posts,
  categories
});
