const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : 'Sahil!@#123', // MYSQL PASSWORD
    database : 'nodejs_login_register' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;