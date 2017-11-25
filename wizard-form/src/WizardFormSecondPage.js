import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './render-field';
import validate from './validate';

function renderError({ meta: { touched, error } }) {
  return touched && error ? <span>{error}</span> : false;
}

function WizardFormSecondPage({ handleSubmit, previousPage }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" type="radio" component="input" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" type="radio" component="input" value="value" />{' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'wizard', // form name is the same across all pages
  destroyOnUnmount: false, // preserve form data over mount / unmount
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  validate,
})(WizardFormSecondPage);
