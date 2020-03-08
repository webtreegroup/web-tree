import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faUsers,
  faCertificate,
  faChartBar,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  Preloader,
  Menu,
  Home,
  Feature,
  About,
  Team,
  Courses,
  Testimonial,
  Contact,
  Footer
} from './Components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';

library.add(
  faUsers,
  faCertificate,
  faChartBar,
  faPhoneAlt
);

function App() {
  return (
    <div className="App">
      {/* <Preloader /> */}
      <Menu />
      <Home />
      <Feature />
      <About />
      <Team />
      <Courses />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
