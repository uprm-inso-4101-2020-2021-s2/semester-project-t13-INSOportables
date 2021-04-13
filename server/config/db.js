const mysql = require("mysql");
const db = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b175613f754fd5",
    password: "cb6b27b2",
    database: "heroku_0c97ca82e09cf18",
});

module.exports = db;
