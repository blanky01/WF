var mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
	name:{type:String}
})
exports.Project = mongoose.model('Project', projectSchema);