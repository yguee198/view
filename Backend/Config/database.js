const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"work"
});
connection.connect((err)=>{
    if(err) console.log(err);
    console.log("Connection to database successfull");
});

module.exports = connection