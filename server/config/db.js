var mysql = require('mysql');

const db = mysql.createPool({
    host : 'database-1.c6er3lzai2l8.ap-northeast-2.rds.amazonaws.com',
    user : 'admin',
    password : 'jj121424',
    database : 'hackathon'
});

module.exports = db;