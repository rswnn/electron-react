import * as React from "react";
import store from "../redux/store";
import Router from "../routes/router";

import { persistor } from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { hot } from "react-hot-loader";
import "../assets/styles/index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default hot(module)(App);
