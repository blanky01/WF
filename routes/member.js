var express = require('express');
var pageConfig = require('../config/page');
var router = express.Router();
var storage = require('../service/storage');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('member',{
  	config:{
  		nav:pageConfig.getSortedPages()
  	}
  });
  next();
});


module.exports = router;
