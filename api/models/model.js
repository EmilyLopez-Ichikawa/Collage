'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageSchema = new Schema({
  user: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Images', ImageSchema);