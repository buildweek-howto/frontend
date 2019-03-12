import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return action.payload.currentUser;
    default:
      return state;
  }
}
