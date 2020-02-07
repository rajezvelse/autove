// Customizing errors before sending to client
module.exports = (error) => {
  switch (error.originalError.name) {
    case "AppValidationError": {
      return {
        status: error.originalError.statusCode,
        message: error.message,
        validations: error.originalError.validations,
        // locations: error.locations,
        // stack: error.stack ? error.stack.split('\n') : [],
        // path: error.path,
      }
    }
    default: {
      return {
        status: error.originalError.statusCode || 500,
        message: error.message
      }
    }
  }
}