/* eslint-disable import/prefer-default-export */
import { Dispatch } from "redux";
import { INIT_ADD } from "../constants";

export interface InitAdd {
  (data: any): void;
}

export const initAdd: InitAdd = (data: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: INIT_ADD,
    payload: data,
  });
};
