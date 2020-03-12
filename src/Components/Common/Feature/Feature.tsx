import React from "react";

import './Feature.scss';

function Feature() {
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>01</span>
              <h3>Corporate website</h3>
              <p>
                We can create corporate site on Wordpress, Opencart, ModX
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>02</span>
              <h3>Landing page</h3>
              <p>
                We can create landing page any difficult, using one of ready templates or develop from scratch
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>03</span>
              <h3>App and SPA development</h3>
              <p>
                In our work we use React.js + TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
