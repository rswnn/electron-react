import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers";
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "coinless",
  storage,
  blacklist: ["init"],
};

const persistedReducer: any = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(reduxThunk, promise))
);

export const persistor = persistStore(store);

export default store;
