import { IMainMenu } from "api/types";

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IRootState {
  mainMenu: IMainMenu;
}
