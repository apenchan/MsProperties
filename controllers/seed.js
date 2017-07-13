var express = require('express');
var mongoose = require('mongoose')
var db = process.env.MONGODB_URI || "mongodb://localhost/ms_properties";
var router = express.Router();
var Home = require('../models/property.js');

// router.get('/', function (req, res){
//   console.log("seeding the db, is going");
//   Homes.find({}, function(err, homes){
//     res.send(homes);
//   });
// });

router.get('/', function(req, res){
  var home1 = new Home({
    img: "http://bit.ly/2tzjYru",
    roomNum: "2",
    availablity: "No",
    city: "West Palm Beach",
    bathroomNum: "2",
    description: "Large backyard and beautiful palm tress in the front."
  });
  // {
  //   img: "http://bit.ly/2tZuIAd",
  //   roomNum: "2",
  //   availablity: "No",
  //   city: "Palm Beach Gardens",
  //   bathroomNum: "3",
  //   description: "Washer and dryer located on home"
  // }
  // ];

  home1.save();

//   console.log(currentHomes);
//   Homes.create(currentHomes, function(err){
//     res.redirect('/seed');
//   });
// });

console.log("===========")
console.log("we are seeding, we are succeeding");
res.end();
});

module.exports = router;
