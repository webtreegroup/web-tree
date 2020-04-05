import { combineReducers } from "redux";

import mainMenu from "./mainMenu";
import technologyStack from "./technologyStack";
import portfolio from "./portfolio";
import userAuth from "./userAuth";

export default combineReducers({
  mainMenu,
  technologyStack,
  portfolio,
  userAuth
});
