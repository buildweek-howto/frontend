import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actions/types";

const loadUser = () => {
  const serializedState = localStorage.getItem('currentUser');
  return Boolean(serializedState) ? JSON.parse(serializedState) : null;
};

export default (state = loadUser(), action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      const serializedState = JSON.stringify(action.payload.currentUser);
      localStorage.setItem('currentUser', serializedState);
      return action.payload.currentUser;
    default:
      return state;
  }
}
