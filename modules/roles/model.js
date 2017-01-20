var mongoose = require('mongoose');
var roleSchema = new mongoose.Schema({
	name:{type:String},
	type:{type:String}
})
exports.Role = mongoose.model('Role', roleSchema);