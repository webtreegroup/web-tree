import React from "react";

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
      <About />
      <Feature />
      <Offer />
      <Portfolio records={4} />
      <TechnologyStack />
    </>
  );
}

export default Home;
