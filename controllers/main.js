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
//NEW and CREATE ARE NOT NEEDED AFTER DEPLOYMENT
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
    res.render('show.ejs', {homes});
  });
});

//EDIT
router.get('/:id/edit', function(req,res){
  Homes.findById(req.params.id, function(err, homes){
    console.log(homes);
    res.render('edit.ejs', {homes});
  });
});

router.put('/:id', function(req, res){
  var query = {'_id': req.params.id};
  Homes.findOneAndUpdate(query, req.body, function(err, homes){
    if (err){
      console.log(err);
    } else {
      res.render('show.ejs', {homes})
    }
  });
});

//DELETE
router.delete('/:id', function(req, res){
  console.log(req.params.id);
  Homes.findByIdAndRemove(req.params.id, function(){
    res.redirect('/');
  });
});

module.exports = router;
