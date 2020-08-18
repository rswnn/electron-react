import { Init } from "./init";

export interface InitintialState {
  init: Init;
}

export const initialState: InitintialState = {
  init: {
    init: "Hello World from redux",
  },
};
