import { GET_MAIN_MENU } from "../actions/index";

import { IAction } from "redux/types";

import { IMainMenuResponse } from "api/types";

const initialState = [] as IMainMenuResponse[];

const mainMenu = (state = initialState, action: IAction<IMainMenuResponse[]>) => {
  switch (action.type) {
    case GET_MAIN_MENU: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default mainMenu;
