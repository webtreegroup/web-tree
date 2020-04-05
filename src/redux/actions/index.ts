import { API } from "api";

import { PORTFOLIO_PAGE_ID, TECHNOLOGY_STACK_PAGE_ID } from "consts";

export const GET_MAIN_MENU = "GET_MAIN_MENU";
export const GET_TECHNOLOGY_STACK = "GET_TECHNOLOGY_STACK";
export const GET_PORTFOLIO = "GET_PORTFOLIO";
export const CHECK_AUTH = "CHECK_AUTH";

export const getMainMenu = (payload: any) => ({
  type: GET_MAIN_MENU,
  payload
});

export const getTechnologyStack = (payload: any) => ({
  type: GET_TECHNOLOGY_STACK,
  payload
});

export const getPortfolio = (payload: any) => ({
  type: GET_PORTFOLIO,
  payload
});

export const checkAuth = (payload?: any) => ({
  type: CHECK_AUTH,
  payload
});

export const getMainMenuAsync = () => (dispatch: any) => {
  API.get('menus/v1/menus/main').then((response) => dispatch(getMainMenu(response.data.items)));
};

export const getTechnologyStackAsync = (records?: number) => (dispatch: any) => {
  const recordsParam = records ? records : 50;

  API.get(`wp/v2/media?per_page=${recordsParam}&parent=${TECHNOLOGY_STACK_PAGE_ID}`).then((response) => dispatch(getTechnologyStack(response.data)));
};

export const getPortfolioAsync = (records?: number) => (dispatch: any) => {
  const recordsParam = records ? records : 30;
    
  API.get(`wp/v2/media?per_page=${recordsParam}&parent=${PORTFOLIO_PAGE_ID}`).then((response) => dispatch(getPortfolio(response.data)));
};

export const checkAuthAsync = () => (dispatch: any) => {
  dispatch(checkAuth());
};
