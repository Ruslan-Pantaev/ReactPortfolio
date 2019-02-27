const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.bsc_id = !isEmpty(data.bsc_id) ? data.bsc_id : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isNumeric(data.bsc_id, { no_symbols: true })) {
    errors.bsc_id = 'bsc id must be a number';
  }

  if (!Validator.isLength(data.bsc_id, { min: 7, max: 7 })) {
    errors.bsc_id = 'bsc id incorrect';
  }

  if (Validator.isEmpty(data.bsc_id)) {
    errors.bsc_id = 'bsc id is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'password incorrect';
  }

  return {
    errors,
    isValid: isEmpty(errors) // if errors is empty, then isValid: true
  };
};
