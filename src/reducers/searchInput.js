import { UPDATE_SEARCH_INPUT } from "../actions/types";

export default (state = '', { type, payload }) => (type === UPDATE_SEARCH_INPUT ? payload : state);
