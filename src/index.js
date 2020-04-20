import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import './index.css';

import configureStore from "./store"; 
import history from "./utils/history";
import createRootReducer from "./reducers";

import Routes from "./routes";

const sagaMiddleware = createMiddleware();
const rootReducer = createRootReducer(history);
const store = configureStore(rootReducer, sagaMiddleware, routerMiddleware(history));


const render = Component => ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('root')
);

render(Routes);

