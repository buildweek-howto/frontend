import { UPDATE_SEARCH_INPUT } from "./types";

export const updateInput = (input) => ({
  type: UPDATE_SEARCH_INPUT,
  payload: input
});
