var express = require('express');
var roleApi = require('./db');


module.exports = function(router){
	router.get('/role/add', function(req, res, next){
	
		if(!req.params('type')){
			res.json({code:-1, msg:'type is required'});
			return;
		}
		if(!req.params('name')){
			res.json({code:-1, msg:'name is required'});
			return;
		}
		roleApi.add(req.query).then(function(ret){
			var ret = ret || {code:0};
			res.json(ret);
		});
	})
	router.get('/role/get', function(req, res, next){
		if(!req.param('type')){
			res.jsonError({code:-1, msg:'type is required'});
		}
		roleApi.get(req.query).then(function(ret){
			var ret = ret || {code:0};
			res.json(ret);
		});
	})
	
	router.get('/role/list', function(req, res, next){
		roleApi.getList().then(function(roles){
			res.json({
				code:0,
				msg:'abc',
				data:roles
			});
		});
	})

};
