var express = require('express');
var mongoose = require('mongoose');

require('./model');

var roleModel = mongoose.model('Role'); 

module.exports = {
	add:function(data){
		return roleModel.create({
			type:data.type,
			name:data.name
		}).exec()
		
		/*promise.then(function(role){
			if(role){
				return {
					code:-1
				};	
			}else{
				return {
					code:0
				}
			}
		}).then(function(_d){
			if(_d.code == 0){
				return roleModel.create({
					type:data.type,
					name:data.name
				}).then(function(err, role){
					if(!err){
						return {
							code:-1,
							msg:'error'
						};
					}else{
						console.log(promise.resolve);
						return {
							code:0
						};
					}
				})		
			}else{
				return {
					code:-1,
					msg:data.name+' is added'
				}
			}
		})
		
		return promise;*/
	},
	has:function(_type){console.log('has');
		return roleModel.findOne({
			type:_type
		}).exec();
			
	},
	getList:function(cb){
		return roleModel.find().exec();
	}
}