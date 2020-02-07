var BaseService = require('./base.service');
var { User } = require('@app/models');
var { encryptPassword } = require('@app/helpers');

class UserService extends BaseService {

  constructor() {
    super(User);
  }

  // Create new user
  async registerUser(data) {
    var user = new this._model();
    user.username = data.username;
    user.password = encryptPassword(data.password);
    user.role = data.role;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;
    user.phone = data.phone;
    user.addressLine1 = data.addressLine1;
    user.addressLine2 = data.addressLine2;

    try {

      var user = await user.save();
      return user;

    } catch (e) {
      this.handleError(e);
    }
  }

  // Query user records
  async fetchUsers() {
    try {
      var users = await this._model.find();
      return users;
    }
    catch (e) {
      this.handleError(e);
    }

  }

}

module.exports = new UserService();