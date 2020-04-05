import {
  IMainMenuResponse,
  IMediaResponse
} from "api/types";

export interface IAction<T = any> {
  type: string;
  payload: T;
}

export interface IRootState {
  mainMenu: IMainMenuResponse[];
  technologyStack: IMediaResponse[];
  portfolio: IMediaResponse[];
  userAuth: any;
}
