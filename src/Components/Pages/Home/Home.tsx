import React from "react";

import { checkAuth } from "hoc";

import {
  About,
  Feature,
  Offer,
  Portfolio,
  TechnologyStack
} from 'components';

import './Home.scss';

function Home() {
  return (
    <>
      <Offer />
      <Feature />
      <TechnologyStack />
      <About />
      <Portfolio records={4} />
    </>
  );
}

export default checkAuth(Home);
