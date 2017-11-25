import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

function renderColorOption(value) {
  return (
    <option value={value} key={value}>
      {value}
    </option>
  );
}

function renderColorSelector({input, meta: { touched, error } }) {
  return (
    <div>
      <select {...input}>
        <option value="">Select a color...</option>
        {colors.map(renderColorOption)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  );
}

function WizardFormThirdPage({ handleSubmit, pristine, previousPage, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
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
})(WizardFormThirdPage);