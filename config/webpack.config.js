const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
     app: './environment/component.js'
},
	output: {
	path:path.resolve(__dirname,'build'),
	filename: 'main.bundle.js'
},
module: {
    rules:[{
        test: /\.js$/,
        use:{
        loader: 'babel-loader',
        options: { 
        	presets:['@babel/preset-env','@babel/react'],
        	rootMode:"upward",
                    configFile:path.resolve(__dirname,'../webpack.config.js')
         }
      },
       include: [
  path.resolve('../node_modules/babel-loader'),
  path.resolve('../node_modules/@babel/babel-runtime'),
  path.resolve('../node_modules/babel-plugin-proposal-export-default-from'),
  ],
  exclude: [
  	  path.resolve(__dirname,'./node_modules')
  ],
     } 
	]
},
	stats: {
       colors:true	
	},
	devtool: 'source-map'
};

