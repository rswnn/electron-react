import * as actiontypes from "../../constants";
import { InitintialState, initialState } from "./_index";
import { ActionWithPayload } from "../../_payload";

const { INIT_ADD } = actiontypes;

export default (
  state: InitintialState = initialState,
  action: ActionWithPayload
) => {
  switch (action.type) {
    default:
      return state;
  }
};
