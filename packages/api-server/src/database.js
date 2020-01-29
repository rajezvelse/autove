const mongoose = require('mongoose');
const config = require('./config');

class Database {
    url = config.DB_URL;
    options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    connection;

    // Establishing database connection
    connect() {
        return mongoose.connect(this.url, this.options).then(conection => {
            this.conection = this.connection;
        });
    }
}

module.exports = new Database();