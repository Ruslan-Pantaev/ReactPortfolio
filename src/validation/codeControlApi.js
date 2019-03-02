const keys = require('../config')

const err = 'error: API Call Invalid, are you missing the apiKey?';

const isValidApiCall = value => {
    if (value === keys.apiKey) {
      console.log('success: API Call Validated')
      return true
    }
    console.log(err)
    return false

}

module.exports = {
  isValidApiCall,
  err
}
