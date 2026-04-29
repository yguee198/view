const conn = require("../Config/database");

exports.create = (username, email, password, callback) => {
    conn.query("INSERT INTO users (username, email ,password) VALUES (?, ?, ?)", [username, email, password], callback);
};

exports.findByEmail = (email, callback) => {
    conn.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

exports.findAll = (callback) => {
    conn.query("SELECT * FROM users", callback);
};