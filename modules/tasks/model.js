var mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({
	title:{type:String},//任务标题
	desc:{type:String},//任务简述
	tapd:{type:String},//tapd链接

	prj:{type:String},//所属项目

	fe:{type:String},//前端开发
	be:{type:String},//后台开发
	pm:{type:String},//产品经理
	party:{type:String},//关注人

	btime:{type:Date},//开始时间
	etime:{tyupe:Date},//完成时间
	expect_etime:{type:Date},//预计完成时间

	level:{type:Number},//优先级
	status:{type:Number},//任务状态
	statusDesc:{type:String},//状态描述
	commentid:{type:Number}	

})
exports.Task = mongoose.model('Task', taskSchema);