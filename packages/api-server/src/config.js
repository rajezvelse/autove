
const APP_SECRET = '6J$m,jp)WH8\}`q/4z,9~9jj:}2JTcS+u?t`>T[]ph7b%cd@H<;!nNcqe"ND3Y9dXZ]J"8{KsC/&3H[_=Gc3ws.t<mCxQ:2qb*/5qeb}MV63B]^H(Yv79Rt';
const PORT = process.env.PORT || 4000;
const DB_URL = 'mongodb://localhost:27017/autove';

// Auth
const TOKEN_EXPIRATION = 24 * 60 * 60; // In seconds (1 day)

module.exports = {
    APP_SECRET,
    PORT,
    DB_URL,
    TOKEN_EXPIRATION
};