import React from 'react';

import { Logo } from './Components';
import { MenuLinks } from './Components';

import './Menu.css';

function Menu() {
  return (
    <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
          <div className="container">

               <div className="navbar-header">
                    <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                         <span className="icon icon-bar"></span>
                    </button>
         
                    <Logo />
               </div>

               <MenuLinks />

          </div>
     </section>
  );
}

export default Menu;
