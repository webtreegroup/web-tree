import React from "react";

import { Rating } from "Components/Common";

import tst1 from 'images/tst-image1.jpg';
import tst2 from 'images/tst-image2.jpg';
import tst3 from 'images/tst-image3.jpg';
import tst4 from 'images/tst-image4.jpg';

import './Testimonial.css';

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Student Reviews <small>from around the world</small>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src={tst1}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Jackson</h4>
                    <span>Shopify Developer</span>
                  </div>
                  <p>
                    You really do help young creative minds to get quality
                    education and professional job search assistance. I’d
                    recommend it to everyone!
                  </p>
                  <Rating quantity={5} />
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src={tst2}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Camila</h4>
                    <span>Marketing Manager</span>
                  </div>
                  <p>
                    Trying something new is exciting! Thanks for the amazing law
                    course and the great teacher who was able to make it
                    interesting.
                  </p>
                  <Rating quantity={3} />
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src={tst3}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Barbie</h4>
                    <span>Art Director</span>
                  </div>
                  <p>
                    Donec erat libero, blandit vitae arcu eu, lacinia placerat
                    justo. Sed sollicitudin quis felis vitae hendrerit.
                  </p>
                  <Rating quantity={2} />
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="tst-image">
                    <img
                      src={tst4}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="tst-author">
                    <h4>Andrio</h4>
                    <span>Web Developer</span>
                  </div>
                  <p>
                    Nam eget mi eu ante faucibus viverra nec sed magna. Vivamus
                    viverra sapien ex, elementum varius ex sagittis vel.
                  </p>
                  <Rating quantity={4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
