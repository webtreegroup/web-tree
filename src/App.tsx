import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
  About,
  Contact,
  Footer,
  Home,
  Menu,
  Portfolio,
  Preloader,
  Services
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
            </Route>

            <Route path="/portfolio">
              <Portfolio records={4} />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/services">
              <Services />
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
