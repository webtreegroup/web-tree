import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import mainMenu from "./mainMenu";
import technologyStack from "./technologyStack";
import portfolio from "./portfolio";
import userAuth from "./userAuth";

export default combineReducers({
  mainMenu,
  technologyStack,
  portfolio,
  userAuth,
  form: formReducer
});
