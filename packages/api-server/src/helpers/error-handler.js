
class AppValidationError extends Error {
  name = 'AppValidationError';
  status = 400;

  constructor(error) {
    super();
    this.message = "Invalid data";
    this.validations = error;
  }

}
exports.AppValidationError = AppValidationError;

class UnauthorizedError extends Error {
  name = 'UnauthorizedError';
  status = 401;

  constructor(message) {
    super();
    this.message = message || "Unauthorized";
  }

}
exports.UnauthorizedError = UnauthorizedError;

exports.parseValidationError = (error) => {
  var err = {};

  Object.keys(error.errors).forEach(field => {
    err[field] = error.errors[field].message;
  })

  return new AppValidationError(err);
}