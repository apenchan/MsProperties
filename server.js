var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
// var db = process.env.MONGOD_URI || "mongodb://localhost/ms_properties"
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// mongoose.connect(db);
var db = process.env.MONGOD_URI || "mongodb://localhost/ms_properties"
mongoose.connect(db);//THIS HAS to be following!!!!
// function connectDatabase(databaseUri){
//   var promise = mongoose.createConnection('mongodb://localhost/ms_properties',{
//     useMongoClient: true
//   });
//   return promise;
// }
// dbConnect.then(function(db){
//   mongoose.connect(db)
// })

//CONTROLLERS
// var seedController = require('./controllers/seed.js');
// app.use('/seed', seedController);

var mainController = require('./controllers/main.js');
app.use('/', mainController);

//Listen
app.listen(port);
console.log("======================================");
console.log("Server is running on MSProperties " + port);
console.log("======================================");
