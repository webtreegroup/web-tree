import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCertificate,
  faChartBar,
  faEnvelope,
  faPhoneAlt,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

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
  fab,
  faCertificate,
  faChartBar,
  faEnvelope,
  faPhoneAlt,
  faUsers
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
