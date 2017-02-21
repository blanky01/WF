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
	},
	has:function(_type){console.log('has');
		return roleModel.findOne({
			type:_type
		}).exec();
			
	},
	update:function(req){
		return roleModel.update(req).exec();	
	},
	del:function(req){
		return roleModel.remove(req).exec()
	},
	clear:function(){
		return roleModel.remove().exec();
	},
	getList:function(cb){
		return roleModel.find().exec();
	}
}