import { GET_MAIN_MENU } from "../actions/index";

import { IAction } from "redux/types";

import { IMainMenu } from "api/types";

const initialState = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Our Services',
    link: '/our-services'
  },
  {
    title: 'Contact',
    link: '/contact'
  }
];

const getMainMenu = (state = initialState, action: IAction<IMainMenu>) => {
  switch (action.type) {
    case GET_MAIN_MENU: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default getMainMenu;
