import { GET_TECHNOLOGY_STACK } from "../actions/index";

import { IAction } from "redux/types";

import { ITechnologyStackResponse } from "api/types";

const initialState = [] as ITechnologyStackResponse[];

const technologyStack = (state = initialState, action: IAction<ITechnologyStackResponse[]>) => {
  switch (action.type) {
    case GET_TECHNOLOGY_STACK: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default technologyStack;
