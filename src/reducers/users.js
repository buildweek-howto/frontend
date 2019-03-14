import { FETCH_USERS_SUCCESS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload.reduce(
        (acc, cur) => ({ ...acc, [cur.id]: cur }),
      {});
    default:
      return state;
  }
};
