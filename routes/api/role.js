var express = require('express');
var router = express.Router();
var roleApi = require('./db');

router.get('/add', function(req, res, next){
console.log(!req.param('type'));
	if(!req.param('type')){
		res.json({code:-1, msg:'type is required'});
		return;
	}
	if(!req.param('name')){
		res.json({code:-1, msg:'name is required'});
		return;
	}
	roleApi.add(req.query).then(function(ret){
		var ret = ret || {code:0};
		res.json(ret);
	});
})
router.get('/get', function(req, res, next){
	if(!req.param('type')){
		res.jsonError({code:-1, msg:'type is required'});
	}
	roleApi.get(req.query).then(function(ret){
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
