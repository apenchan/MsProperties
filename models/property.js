var mongoose = require('mongoose');

//Schema
var homesSchema = new mongoose.Schema({
  img: String,
  roomNum: String,
  availablity: String,
  city: String,
  bathroomNum: String
});

var Homes = mongoose.model('Homes', homesSchema);

module.exports = Homes;
