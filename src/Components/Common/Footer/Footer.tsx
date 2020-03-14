import React from "react";
import { connect } from "react-redux";

import { MenuLinks } from "components";

import { IRootState } from "redux/types";

import './Footer.scss';

function Footer({
  menu
}: any) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Copyright</h2>
              </div>

              <div className="copyright-text">
                <p>&copy; 2020 Web Tree</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-info">
              <div className="section-title">
                <h2>Contact Info</h2>
              </div>
              <address>
                <p>
                  <a href="tel:>89179534993">+7 (917) 953-49-93</a>
                </p>
                <p>
                  <a href="mailto:web-tree@yandex.ru">web-tree@yandex.ru</a>
                </p>
              </address>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="footer-info newsletter-form">
              <div className="section-title">
                <h2>Quick Links</h2>
              </div>
              <div className="footer_menu">
                <MenuLinks menu={menu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default connect(
  (state: IRootState) => ({
    menu: state.mainMenu
  }),
  null
)(Footer);
