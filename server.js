
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const TeacherschedulingRoutes = require( "./routes/teacher" );
const users = [
    { name : "Areeb" , Age : 22 },
    { name : "Ammad" , Age : 45 },
    { name : "Huhu guyz" , Age : 17}
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
