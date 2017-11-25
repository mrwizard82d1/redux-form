function existy(x) {
  return x != null;
}

export default function validate(values) {
  const errors = {};
  
  if (!existy(values.firstName)) {
    errors.firstName = 'Required fn';
  }
  
  if (!existy(values.lastName)) {
    errors.lastName = 'Required ln';
  }
  
  if (!existy(values.email)) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  if (!existy(values.sex)) {
    errors.sex = 'Required';
  }
  
  console.log(errors);
  return errors;
}
