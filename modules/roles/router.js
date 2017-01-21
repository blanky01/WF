var express = require('express');
var roleApi = require('./db');
var router = express.Router();

router.get('/add', function(req, res, next){

	if(!req.query.type){
		res.json({code:-1, msg:'type is required'});
		return;
	}
	
	if(!req.query.name){
		res.json({code:-1, msg:'name is required'});
		return;
	}
	roleApi.has(req.query.type).then(function(findRet){
	console.log('after find');
		if(findRet){
			res.json({
				code:-1,
				msg:req.query.type + ' is added'
			})
		}else{
			roleApi.add(req.query).then(function(ret){
				var ret = ret || {code:0};
				res.json(ret);
			})
		}
	})
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
