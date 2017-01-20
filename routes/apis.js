var express = require('express');
var fs = require('fs');
var path = require('path');
var modulesPath = '../modules';
var router = express.Router();

fs.readdirSync(modulesPath).forEach(function(filename){
	var filePath = modulesPath + '/' + filename + '/router';
	
	fs.exists(path.resolve(__dirname, filePath + '.js'), function(exists){
	console.log(filePath+exists);
		if(exists){
		console.log('file path:'+path.resolve(__dirname, filePath));
			require(filePath)(router);
		}
	})
})

console.log('fffffffffffffffffffffffffffffffffffffff');
module.exports = router;