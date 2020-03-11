import React from 'react';
import { Provider } from "react-redux";
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
} from 'components';

import store from "./redux/store";

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
      <Provider store={store}>
        <div className="App">
          {/* <Preloader /> */}
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
              <Feature />
              <About />
              <Team />
              <Courses />
              <Testimonial />
              <Contact />
            </Route>

            <Route path="/portfolio">
              <Team />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/services">
              <Courses />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
