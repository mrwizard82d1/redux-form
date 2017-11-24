import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render-field';
import validate from './validate';

function WizardFormFirstPage({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} label="First Name" />
      <Field name="lastName" type="text" component={renderField} label="Last Name" />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'wizard', // all pages must have same form name
  destroyOnMount: false, // preserve form data over mount/unmount
  forceUnregisterOnUnmount: true, // unregistery fields when unmounted
  validate,
})(WizardFormFirstPage);
