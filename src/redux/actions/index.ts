import { API } from "api";

export const GET_MAIN_MENU = "GET_MAIN_MENU";
export const GET_TECHNOLOGY_STACK = "GET_TECHNOLOGY_STACK";

export const getMainMenu = (payload: any) => ({
  type: GET_MAIN_MENU,
  payload
});

export const getTechnologyStack = (payload: any) => ({
  type: GET_TECHNOLOGY_STACK,
  payload
});

export const getMainMenuAsync = () => (dispatch: any) => {
  API.get('menus/v1/menus/main').then((response) => dispatch(getMainMenu(response.data.items)));
};

export const getTechnologyStackAsync = () => (dispatch: any) => {
  API.get('wp/v2/media?per_page=50&parent=270').then((response) => dispatch(getTechnologyStack(response.data)));
};
