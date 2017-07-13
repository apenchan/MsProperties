var express = require('express');
var router = express.Router();
var Home = require('../models/property.js');

router.get('/', function(req, res){
  Home.find(function(req, homes){
    console.log(Home);
  res.render('index.ejs', {Home});
  });
});

module.exports = router;
