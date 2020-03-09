import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCertificate,
  faChartBar,
  faEnvelope,
  faPhoneAlt,
  faUsers,
  faCalendar,
  faClock,
  faStar
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
  faUsers,
  faCalendar,
  faClock,
  faStar
);

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Preloader /> */}
        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/our-services">
            our services
          </Route>
          <Route path="/contact">
            contact
          </Route>
        </Switch>

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
    </Router>
  );
}

export default App;
