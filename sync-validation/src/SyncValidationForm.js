import React from 'react';
import { reduxForm } from 'redux-form';

function SyncValidationForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Utrum ess oporteat, annon -- illud quaeritur
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'sync-validation'
})(SyncValidationForm);