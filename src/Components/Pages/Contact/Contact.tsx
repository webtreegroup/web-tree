import React from "react";

import { Form } from "./components";

import contact from 'images/contact-image.jpg';

import { IFormData } from "./components/Form/Form";

import './Contact.scss';

const Contact: React.FC = () => {
  const handleSubmit = (values: IFormData) => {
    console.log(values)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={handleSubmit} />
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="contact-image">
              <img src={contact} alt="Smiling Two Girls" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
