var BaseService = require('./base.service');
const { User } = require('@app/models');
var { UnauthorizedError, verifyPassword, generateToken } = require('@app/helpers');

class AuthService extends BaseService {
  constructor() {
    super(User)
  }

  async login(username, password) {

    try {
      let user = await this._model.findOne({ username: username }).select('+password');

      if (!user) throw new UnauthorizedError('Invalid username');

      let matched = verifyPassword(password, user.password);

      if (!matched) throw new UnauthorizedError('Invalid password');

      delete user.password;

      let token = generateToken(user.id, user.role);

      return {
        token: token,
        user: user
      }

    } catch (e) {
      this.handleError(e);
    }


  }
}

module.exports = new AuthService();