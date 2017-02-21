var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
	content:{type:String},
	time:{type:Date},
	type:{type:Number}
});