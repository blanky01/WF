var express = require('express');
var router = express.Router();
var roleApi = require('../../modules/roles/db');

router.get('/add', function(req, res, next){
	roleApi.add(req.query).then(function(ret){
		var ret = ret || {code:0};
		res.json(ret);
	});
})

router.get('/list', function(req, res, next){
	roleApi.getList().then(function(roles){
		res.json({
			code:0,
			msg:'abc',
			data:roles
		});
	});
})

module.exports = router;