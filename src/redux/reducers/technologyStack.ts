import { GET_TECHNOLOGY_STACK } from "../actions/index";

import { IAction } from "redux/types";

import { IMediaResponse } from "api/types";

const initialState = [] as IMediaResponse[];

const technologyStack = (state = initialState, action: IAction<IMediaResponse[]>) => {
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
