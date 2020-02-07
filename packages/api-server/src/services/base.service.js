var { parseValidationError } = require('@app/helpers');

class BaseService {
  _model;

  constructor(model) {
    this._model = model;
  }

  // Error handler
  handleError(e) {

    if (e.name == 'ValidationError')
      throw parseValidationError(e);
    else throw e;

  }
}

module.exports = BaseService;