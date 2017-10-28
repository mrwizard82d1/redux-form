import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
  form: 'sync-validation'
})(SyncValidationForm);