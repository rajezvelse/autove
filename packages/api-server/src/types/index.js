const commonTypes = require('./common.types');
const userTypes = require('./user.types');
const authTypes = require('./auth.types');

module.exports = {
  ...commonTypes,
  ...userTypes,
  ...authTypes
}