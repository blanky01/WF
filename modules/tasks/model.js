var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
	title:{type:String},
	prj:{type:String},
	fe:{type:String},
	be:{type:String},
	btime:{type:Date},
	expect_etime:{type:Date},
	level:{type:Number}
})
exports.Role = mongoose.model('Role', roleSchema);