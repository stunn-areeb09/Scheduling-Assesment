const mysql = require("mysql2");
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "zaqwerty",
    database : "teacher scheduling",
    multipleStatements : true
});

mysqlConnection.connect( (err)=>{
    if(!err)
    {
        console.log("Connected Succesfull!!!");
    }
    else
    {
        console.log(err);
        console.log("Connection Failed !!");
    }
});

module.exports = mysqlConnection;