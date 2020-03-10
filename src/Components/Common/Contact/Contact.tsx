import React from "react";

import contact from 'images/contact-image.jpg';

import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <form id="contact-form" role="form" action="" method="post">
              <div className="section-title">
                <h2>
                  Contact us <small>we love conversations. let us talk!</small>
                </h2>
              </div>

              <div className="col-md-12 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  name="name"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                />

                <textarea
                  className="form-control"
                  placeholder="Tell us about your message"
                  name="message"
                />
              </div>

              <div className="col-md-4 col-sm-12">
                <input
                  type="submit"
                  className="form-control"
                  name="send message"
                  value="Send Message"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="contact-image">
              <img
                src={contact}
                className="img-responsive"
                alt="Smiling Two Girls"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
