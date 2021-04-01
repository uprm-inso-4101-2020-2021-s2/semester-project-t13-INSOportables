const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ronaldj_13",
    database: "PyJaC_Project",
});

module.exports = db;
