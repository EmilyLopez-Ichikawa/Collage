'use strict';
module.exports = function(app) {
  var images = require('../controllers/controller');

  app.route('/api/images')
    .get(images.images_in_range)
    .post(images.add_image); 

  app.route('/api/like')
    .post(images.like_image)

  app.route('/api/getInfo')
    .get(images.get_image_info)

  app.route('/api/userImages')
    .get(images.get_user_images)

    
  app.route('/api/delete')
    .delete(images.delete_all) 

  app.route('/api/all')
    .get(images.get_all_images)
};