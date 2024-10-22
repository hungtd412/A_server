module.exports = function(router) {
  var homeController = require('../controllers/HomeController.js');

  router.get('/', homeController.home);
};

// var express = require('express');
// var router = express.Router();

// var homeController = require('../controllers/HomeController.js');

// router.get('/', homeController.home);

// module.exports = router