const mysql = require('mysql');

const db = mysql.createPool({
    host: '15.164.102.34',
    port: '3306',
    user: 'ubuntu',
    password: '1234',
    database: 'SejongShare'
});

module.exports = db;