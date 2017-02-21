var path = require('path');
module.exports = {
	entry:{
		index:'./src/index/entry.ts',
		member:'./src/member/entry.ts'
	},
	resolve:{
		extensions:['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	output:{
		path:path.join(__dirname, 'public'),
		publickPath:'/app/',
		filename:'js/[name].entry.js',
		chunkFilename:'js/[id].chunk.js'
	},
	module:{
		loaders:[
			{test:/\.ts$/, loader:'ts-loader?typescriptCompiler=jsx-typescript'}
		]
	}
}