import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>
      To submit, or not to submit
    </p>
  </form>
);

export default SimpleForm;