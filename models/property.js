var mongoose = require('mongoose');

//Schema
var homesSchema = new mongoose.Schema({
  img: String,
  roomNum: String,
  availablity: String,
  city: String,
  bathroomNum: String,
  description: String
});

var Homes = mongoose.model('Homes', homesSchema);

module.exports = Homes;
