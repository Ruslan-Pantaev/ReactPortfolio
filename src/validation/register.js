const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // do this for any required field
  // if it's empty, it'll set string to ''
  data.name = !isEmpty(data.name) ? data.name : '';
  data.bsc_id = !isEmpty(data.bsc_id) ? data.bsc_id : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmed_password = !isEmpty(data.confirmed_password) ? data.confirmed_password : '';

  // see https://www.npmjs.com/package/validator

  if (Validator.isEmpty(data.name)) {
    errors.name = 'name is required';
  }

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'name must be between 3 and 30 characters';
  }

  if (Validator.isEmpty(data.bsc_id)) {
    errors.bsc_id = 'bsc id is required';
  }

  if (!Validator.isNumeric(data.bsc_id, { no_symbols: true })) {
    errors.bsc_id = 'bsc id must be a number';
  }

  if (!Validator.isLength(data.bsc_id, { min: 7, max: 7 })) {
    errors.bsc_id = 'bsc id incorrect';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'invalid email';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.confirmed_password)) {
    errors.confirmed_password = 'confirmed password is required';
  }

  if (!Validator.equals(data.password, data.confirmed_password)) {
    errors.confirmed_password = 'passwords do not match';
  }

  return {
    errors,
    isValid: isEmpty(errors) // if errors is empty, then isValid: true
  };
};
