import { API } from "api";

export const GET_MAIN_MENU = "GET_MAIN_MENU";

export const getMainMenu = (payload: any) => ({
  type: GET_MAIN_MENU,
  payload
});

export const getMainMenuAsync = () => (dispatch: any) => {
  API.get('menus/v1/menus/main').then((response) => dispatch(getMainMenu(response.data.items)));
};
