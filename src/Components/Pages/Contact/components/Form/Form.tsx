import React from "react";
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

interface IFormProps { }

export interface IFormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC<IFormProps & InjectedFormProps<IFormData, IFormProps>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="section-title">
        <h2>
          Contact us <small>we love conversations. let us talk!</small>
        </h2>
      </div>

      <div className="col-md-12 col-sm-12">
        <Field
          name="name"
          component="input"
          type="text"
          className="form-control"
        />

        <Field
          name="email"
          component="input"
          type="text"
          className="form-control"
        />

        <Field
          name="message"
          component="textarea"
          className="form-control"
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
  );
}

export default reduxForm<IFormData, IFormProps>({
  form: 'contact'
})(Form);
