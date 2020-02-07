const bcrypt = require('bcrypt');

// Hashing raw password text
exports.encryptPassword = (rawPassword) => {

  let hash = bcrypt.hashSync(rawPassword, 10);

  return hash;
}

// Comparing the plain password with the hashed password
exports.verifyPassword = (rawPassword, hash) => {

  let result = bcrypt.compareSync(rawPassword, hash);

  return result;
}