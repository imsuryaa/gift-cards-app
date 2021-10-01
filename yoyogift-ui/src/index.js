import "react-app-polyfill/ie9";
import "core-js";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./modules/App";
import logger from 'redux-logger'

const middlewareList = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middlewareList));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
