function existy(x) {
  return x != null;
}

export default function validate(values) {
  const errors = {};
  
  if (!existy(values.firstName)) {
    errors.firstName = 'Required';
  }
  
  if (!existy(values.lastName)) {
    errors.lastName = 'Required';
  }
  
  return errors;
}
