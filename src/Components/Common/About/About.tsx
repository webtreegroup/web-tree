import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EntryForm } from "./Components";

import "./About.scss";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-info">
              <h2>
                Start your journey to a better life with online practical
                courses
              </h2>

              <figure>
                <span>
                  <FontAwesomeIcon icon="users" />
                </span>
                <figcaption>
                  <h3>Professional Trainers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint ipsa voluptatibus.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <span>
                  <FontAwesomeIcon icon="certificate" />
                </span>
                <figcaption>
                  <h3>International Certifications</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint ipsa voluptatibus.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <span>
                  <FontAwesomeIcon icon="chart-bar" />
                </span>
                <figcaption>
                  <h3>Free for 3 months</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint ipsa voluptatibus.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="offset-md-1 col-md-4 col-sm-12">
            <EntryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
