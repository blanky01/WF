var express = require('express');
var fs = require('fs');
var path = require('path');
var modulesPath = '../modules';
var router = express.Router();

router.use('/role', require('../modules/roles/router'));
router.use('/task', require('../modules/tasks/router'));

module.exports = router;