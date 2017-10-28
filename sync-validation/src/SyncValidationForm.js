import React from 'react';
import { Field, reduxForm } from 'redux-form';

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  
  return errors;
}

function warn(values) {
  const warnings = {};
  
  if (values.age < 19) {
    warnings.age = 'Hmmm. You seem a bit young...';
  }
  
  return warnings;
}

function renderField({ input, label, type, meta : { touched, error, warning }}) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

function SyncValidationForm({ handleSubmit, pristine, reset, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Utrum ess oporteat, annon -- illud quaeritur
      </div>
      <Field name="username" type="text" component={renderField} label="Username" />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'sync-validation', // a unique identifier for this form
  validate, // validation function used by redux-form
  warn, // warning function used by redux-form
})(SyncValidationForm);
