'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageSchema = new Schema({
  user: {
    type: String
  },
  lat: {
    type: Number,
    default: 10.0
  },
  long: {
    type: Number,
    default: 20.0
  },
  image: {
    type: String
  },
  likes: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Images', ImageSchema);