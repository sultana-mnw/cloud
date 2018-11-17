var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose=require('mongoose');
var dbconnect = require('./dbconnection/db');
mongoose.connect(dbconnect.url,function(err,result){
    if(err)
    {
        console.log("error on connection");
    }
    if(result)
    {
        console.log("connected");
    }
})
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

require('./router/approutes')(app);



var port = process.env.PORT || 3000;
app.listen(port);
console.log(port);