import { combineReducers } from "redux";

import mainMenu from "./mainMenu";
import technologyStack from "./technologyStack";
import portfolio from "./portfolio";

export default combineReducers({
  mainMenu,
  technologyStack,
  portfolio
});
