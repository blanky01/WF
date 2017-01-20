var express = require('express');
var mongoose = require('mongoose');

require('./model');

var roleModel = mongoose.model('Role'); 

module.exports = {
	add:function(data, cb){
		var promise = roleModel.findOne({
			type:data.type
		}).exec();
		
		promise.then(function(err, role){
			console.log('fawfwefwefwef'+role)
			if(role){			
				return {
					code:-1
				};	
			}else{
				roleModel.create({
					type:data.type,
					name:data.name
				}).then(function(err, role){
					if(!	err){
						promise.resolve({
							code:-1,
							msg:'error'
						});
					}else{
						console.log(role);
						promise.resolve({
							code:0
						});
					}
				})		
			}
		})
		
	},
	getList:function(cb){
		return roleModel.find().exec();
	},
	has:function(role, cb){
		roleModel.findOne(role,function(err, role){
			if(role){
				cb && cb(role);
			}else{
				cb && cb();	
			}
		})
	}
}