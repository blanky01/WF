var express = require('express');
var roleApi = require('./db');
var router = express.Router();

router.get('/add', function(req, res, next){
	roleApi.has(req.query.type).then(function(findRet){
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
	if(!req.query('type')){
		res.json({code:-1, msg:'type is required'});
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
			msg:'',
			data:roles
		});
	});
})

router.get('/update', function(req, res, next){
	
})

router.get('/del', function(req, res, next){
	if(!req.query.type){
		res.json({
			code:-1,
			msg:'type is need'
		});
		return;
	}

	roleApi.dle(req).then(function(roles){
		res.json({
			code:0
		});
	});
})

router.get('/clear', function(req, res, next){
	roleApi.clear().then(function(roles){
		res.json({
			code:0
		});
	});
})


module.exports = router;
