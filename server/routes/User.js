const express = require("express");
const router = express.Router();

const db = require("../config/db");

//Sign Up
router.post("/sign-up", (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    //const confirm_password = req.confirm_password;
    db.query(
        "INSERT INTO user (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?);",
        [first_name, last_name, username, email, password],
        (err, results) => {
            console.log(err);
            res.send(results);
        }
    );
});
//Log In
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM user WHERE username = ?",
        username,
        (err, results) => {
            if (err) {
                console.log(err);
            }
            if (results.length > 0) {
                if (password == results[0].password) {
                    res.json({loggedIn: true, username: username})
                } else {
                    res.json({loggedIn: false, message: "Wrong username/password combination!"});
                }
            } else {
                res.json({loggedIn: false, message: "User doesn't exist."});
            }
        }
    );
});
module.exports = router;






