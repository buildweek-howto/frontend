import { FETCH_CATEGORIES_SUCCESS, ADD_CATEGORY_SUCCESS, EDIT_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
    case ADD_CATEGORY_SUCCESS:
    case EDIT_CATEGORY_SUCCESS:
    case DELETE_CATEGORY_SUCCESS:
      return action.payload.reduce(
        (acc, { id, category_name }) => ({ ...acc, [id]: category_name }),
      {});
    default:
      return state;
  }
};
