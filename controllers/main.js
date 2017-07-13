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

//====================================
//ARE NOT NEEDED, BUT ALREAADY WROTE
//====================================
//NEW
router.get('/new', function(req, res){
  res.render('new.ejs');
});

//CREATE
router.post('/', function(req,res){
  console.log(req.body);
  var homes = new Homes(req.body);
  homes.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log('home saved');
      res.redirect('/');
    }
  });
});

//SHOW
router.get('/:id', function(req, res){
  Homes.findById(req.params.id, function(req, homes){
    console.log(homes);
    res.render('edit.ejs', {homes});
  });
});

module.exports = router;
