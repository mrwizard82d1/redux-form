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
    <div>
      <label>Last Name</label>
      <div>
        <Field name="lastName" component="input" type="text" placeholder="Last Name" />
      </div>
    </div>
    <div>
      <label>Email</label>
      <div>
        <Field name="email" component="input" type="email" placeholder="Email" />
      </div>
    </div>
    <div>
      <label>Sex</label>
      <div>
        <label>
          <Field name="sex" component="input" type="radio" value="male" />{' '}
          Male
        </label>
        <label>
          <Field name="sex" component="input" type="radio" value="female" />{' '}
          Female
        </label>
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

