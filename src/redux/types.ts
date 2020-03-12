import {
  IMainMenuResponse,
  ITechnologyStackResponse
} from "api/types";

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IRootState {
  mainMenu: IMainMenuResponse[];
  technologyStack: ITechnologyStackResponse[];
}
