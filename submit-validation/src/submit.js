import { SubmissionError } from 'redux-form';
const _ = require('underscore');

// Simulates latency of `ms` milliseconds.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function validateSubmittedValues(values) {
  if (!_.contains(['john', 'paul', 'george', 'ringo'], values.username)) {
    throw new SubmissionError({
      username: `User ${values.username} does not exist`,
      _error: 'Login failed!',
    });
  } else if (values.password !== 'redux-form') {
    throw new SubmissionError({
      password: `Wrong password: ${values.password}`,
      _error: 'Login failed',
    });
  } else {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
}

function submit(values) {
  return sleep(1000) // 1 second to get response from server
    .then(validateSubmittedValues(values));
}

export default submit;
