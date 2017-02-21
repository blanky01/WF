var express = require('express');
var mongoose = require('mongoose');

require('./model');

var taskModel = mongoose.model('Task'); 

module.exports = {
	add:function(data){
		return taskModel.create({
			type:data.type,
			name:data.name
		}).exec()
	},
	has:function(_type){console.log('has');
		return taskModel.findOne({
			type:_type
		}).exec();
			
	},
	update:function(req){
		return taskModel.update(req).exec();	
	},
	del:function(req){
		return taskModel.remove(req).exec()
	},
	clear:function(){
		return taskModel.remove().exec();
	},
	getList:function(cb){
		return taskModel.find().exec();
	}
}