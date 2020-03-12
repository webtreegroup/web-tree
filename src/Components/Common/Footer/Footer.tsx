import React from "react";

import './Footer.scss';

function Footer() {
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
                <ul>
                  <li>
                    <a href="#s">Career</a>
                  </li>
                  <li>
                    <a href="#s">Investor</a>
                  </li>
                  <li>
                    <a href="#s">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#s">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
