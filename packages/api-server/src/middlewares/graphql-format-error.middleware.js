// Customizing errors before sending to client
module.exports = (error) => {

  let errorName = error.originalError? error.originalError.name: '';

  switch (errorName) {
    case "AppValidationError": {
      return {
        status: error.originalError.status,
        message: error.message,
        validations: error.originalError.validations,
        // locations: error.locations,
        // stack: error.stack ? error.stack.split('\n') : [],
        // path: error.path,
      }
    }
    default: {
      return {
        status: error.originalError? (error.originalError.status || 400):  400,
        message: error.message
      }
    }
  }
}