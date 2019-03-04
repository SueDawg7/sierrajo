const mysql = require('mysql');

const connection =
    mysql. createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER_PASS,
        database: process.env.DB_USER_PASSWORD,
        database: process.env.DB
    });

    module.export = connection.connect();