var path = require('path');
module.exports = {
	entry:{
		index:'./src/index/entry.tsx',
		member:'./src/member/entry.tsx'
	},
	resolve:{
		extensions:['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	output:{
		path:path.join(__dirname, 'public'),
		publickPath:'/app/',
		filename:'js/[name].entry.js',
		chunkFilename:'js/[id].chunk.js'
	},
	module:{
		loaders:[
			{test:/\.ts$/, loader:'ts-loader?typescriptCompiler=jsx-typescript'},
			{test:/\.tsx$/, loader:'awesome-typescript-loader'}
		]
	},
	externals:{
		"react":"React",
		"react-dom":"ReactDOM"
	}
}