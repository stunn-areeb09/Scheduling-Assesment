const express = require("express");

const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/" , (req , res)=>{
    mysqlConnection.query("select * from `teacher details`" , (err ,rows, fields) => {
        if(!err)
        {
            res.send(  {  rows : fields  } );
        }
        else
        {
            console.log(err);
        }
    })
})

module.exports = Router;