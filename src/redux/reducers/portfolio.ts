import { GET_PORTFOLIO } from "../actions/index";

import { IAction } from "redux/types";

import { IMediaResponse } from "api/types";

const initialState = [] as IMediaResponse[];

const portfolio = (state = initialState, action: IAction<IMediaResponse[]>) => {
  switch (action.type) {
    case GET_PORTFOLIO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default portfolio;
