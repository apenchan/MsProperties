var mongoose = require('mongoose');

//Schema
var homeSchema = new mongoose.Schema({
  img: String,
  roomNum: String,
  availablity: String,
  city: String,
  bathroomNum: String,
  description: String
});

var Home = mongoose.model('Home', homeSchema);

module.exports = Home;
