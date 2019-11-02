'use strict';


var mongoose = require('mongoose'),
  Image = mongoose.model('Images');

// Query parameters are minLat, maxLat, minLong, and maxLong
// Return lat, long, and imageId of all images the square
exports.images_in_range = function(req, res) {
  Image.find(
    { $and: [ { lat:  { $gt: req.query.minLat  } }, 
              { lat:  { $lt: req.query.maxLat  } },
              { long: { $gt: req.query.minLong } },
              { long: { $lt: req.query.maxLong } }
            ]
    }, 
    'lat long', 
    function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
  });
};

// Recieve image as base64 encoded string, user, lat, and long in the body of POST request
// Save in the database as a new Image document
exports.add_image = function(req, res) {
  var new_image = new Image(req.body);
  new_image.save(
    function(err, image) {
      console.log("~~~~~~~~~~~TASK~~~~~~~~~~~~~~");
      console.log(image);
      if (err)
        res.send(err);
      res.json({success: 'true'});
  });
};

// Recieve imageId and liker as a query parameters, find Image by imageId
// Add liker to the array of likes on the image
exports.like_image = function(req, res) {
  Image.findByIdAndUpdate(
    req.query.imageId, 
    { "$push": { "likes": req.query.liker } },
    { "new": true, "upsert": true },
    function (err, data) {
      if (err) 
        res.send(err);
      res.json(data);
    }
  );
};

exports.get_all_image_info = function(req, res) {
  Image.findById(
    req.params.imageId, 
    function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
  });
};


// TODO: remove delete and get all after production
// Delete all images in the database (for testing)
exports.delete_all = function(req, res) {
  Image.deleteMany(
    {}, 
    function(err, image){
      if(err)
        res.send(err);
      res.json({success: 'true'});
  });
};

// Get all images
exports.get_all_images = function(req, res) {
  Image.find({}, 
    function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    }
  );
}
