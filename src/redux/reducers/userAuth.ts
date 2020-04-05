import { CHECK_AUTH } from "../actions";

import { IAction } from "redux/types";

const initialState = {
  isAuth: true
};

const userAuth = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CHECK_AUTH: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default userAuth;
