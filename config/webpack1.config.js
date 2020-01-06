const path = require('path');
const webpack = ('webpack');

module.exports = {

	entry = {
		app:'./component.js'
	},

	output: {
		path:path.resolve(__dirname,'./build'),
		filename:'main.bundle.js'
	},     //there are only two instances inside the json

	module:{

		rules:[{

			test:/\.js$/,

			use:{
				loader: 'babel-loader',
				option:{
					presets:['@babel/presets-env','@babel/react'],
					rootMode:"upward",
					configFile:path.resolve(__dirname,'./webpack.config.js')
				}
			},

			include: [
              
              path.resolve('../nodes_modules/babel-loader'),
              path.resolve('../nodes_modules/@babel/babel-runtime'),
              path.resolve('../node_modules/babel-plugin-proposal-export-default-from'),
			],

			exclude:[
              
              path.resolve(__dirname,'../node_modules')
			],

		}]
	},

	stats:{
		colors:true
	},

	devtool:'source-map'

};