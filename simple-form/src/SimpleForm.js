import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>First Name</label>
      <div>
        <Field name="firstName" component="input" type="text" placeholder="First Name" />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

