var express = require('express');
var router = express.Router();
var Homes = require('../models/property.js');

router.get('/', function(req, res){
  console.log('get index');
  Homes.find(function(req, homes){
    console.log(homes);
  res.render('index.ejs', {homes});
  });
});

module.exports = router;
