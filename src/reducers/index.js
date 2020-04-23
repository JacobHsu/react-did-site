import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loading from "./loading";
import uportLogin from "./uportLogin";
import uportMessages from "./uportMessages";

function createRootReducer(history) {
    return combineReducers({
      router: connectRouter(history),
      loading,
      uportLogin,
      uportMessages,
    });
  }
  
export default createRootReducer;