'use strict';
module.exports = function(app) {
  var images = require('../controllers/controller');

  // todoList Routes
  app.route('/images')
    .get(images.images_in_range)
    .post(images.add_image); 

  app.route('/like')
    .post(images.like_image)

  app.route('/images/:imageId')
    .get(images.get_all_image_info)



  app.route('/delete')
    .delete(images.delete_all) 

  app.route('/all')
    .get(images.get_all_images)
};