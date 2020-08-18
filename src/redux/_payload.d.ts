import { Action } from "redux";

export interface ActionWithPayload extends Action {
  payload: {
    data: {
      data: any;
      success: boolean;
      msg_code: string;
      msg_client: string;
    };
    response: {
      data: TemplatePayload<T>;
    };
  };
}
