var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	name:{type:String},
	rtx:{type:String},
	role:{type:String}
})
exports.User = mongoose.model('User', userSchema);