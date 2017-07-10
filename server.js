var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
//var db (still need to create)
var methodOverride = require('method-override');
//var mongoose(create first then add)
var port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extrended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

//mongoose.connect(db);

//CONTROLLERS

//Listen
app.listen(port);
console.log("======================================");
console.log("Server is running on MSProperties " + port);
console.log("======================================");
