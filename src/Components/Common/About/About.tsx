import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EntryForm } from "components";

import "./About.scss";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-info">
              <div>

                <h2>
                  About us in a few words
                </h2>
                
                <figure>
                  <span>
                    <FontAwesomeIcon icon="chart-bar" />
                  </span>
                  <figcaption>
                    <h3>10 years in web development</h3>
                    <p>
                      During this time, we participated in many different projects, from creating landing pages to large corporate web portals.
                    </p>
                  </figcaption>
                </figure>

                <figure>
                  <span>
                    <FontAwesomeIcon icon="certificate" />
                  </span>
                  <figcaption>
                    <h3>Certified specialists</h3>
                    <p>
                      Our experts have certificates in various web technologies.
                    </p>
                  </figcaption>
                </figure>

                <figure>
                  <span>
                    <FontAwesomeIcon icon="users" />
                  </span>
                  <figcaption>
                    <h3>Technical support free for 1 month</h3>
                    <p>
                      If you create your website with us, we give you free support for 1 month.
                    </p>
                  </figcaption>
                </figure>
              </div>

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
