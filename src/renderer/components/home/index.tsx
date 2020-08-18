import React from "react";
import { InitintialState } from "../../../redux/reducers/init/_index";

interface Props {
  init: InitintialState;
}

function index({ init }: Props) {
  return (
    <div className="container-fluid home">
      <div className="d-flex justify-content-around content">
        <div className="content_left">
          <h1>{init.init.init}</h1>
        </div>
        <div className="content_right">
          <img
            src="https://img.pngio.com/download-payment-icon-2-ask-the-expert-payment-png-image-with-no-payment-png-500_501.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default index;
