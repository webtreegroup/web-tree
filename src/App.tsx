import React from 'react';

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
