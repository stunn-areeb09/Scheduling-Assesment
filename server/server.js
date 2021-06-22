
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const TeacherschedulingRoutes = require( "./routes/teacher" );
const users = [
];

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


app.get('/' , (req , res)=>{
    res.send(
        {
            msg : 'Hello!',
            user : { }
        });
});

app.get('/users' , (req, res)=>{
    res.send(users);
});

app.use( bodyParser.json() );

app.use( "/teacher" , TeacherschedulingRoutes );


app.listen(3000);
