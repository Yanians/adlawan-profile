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
watch:true,
module: {
    rules:[{
        test: /\.js$/,
        use:{
        loader: 'babel-loader',
        options: { 
        	presets:['@babel/preset-env','@babel/react'],
        	rootMode:"upward",
                    configFile:path.resolve(__dirname,'./webpack.config.js')
         }
      },
       include: [
                     path.resolve('./node_modules/babel-loader'),
                     path.resolve('./node_modules/@babel/babel-runtime'),
                     path.resolve('./node_modules/babel-plugin-proposal-export-default-from'),
                     path.resolve('../node_modules/@babel/babel-runtime/core-js'),
                     path.resolve('../node_modules/@babel/babel-preset-env'),
                     path.resolve('../node_modules/babel-plugin-proposal-private-methods'),
                     path.resolve('../node_modules/babel-plugin-proposal-class-properties'),
                     path.resolve('../node_modules/babel-plugin-proposal-export-default-from'),
                     path.resolve('../node_modules/babel-plugin-transform-es2015-classes'),
                     path.resolve('../node_modules/babel-plugin-transform-remove-strict-mode'),
                     path.resolve('../node_modules/babel-plugin-proposal-object-rest-spread'),
                     path.resolve('../node_modules/babel-plugin-transform-es2015-arrow-functions'),
                     path.resolve('../node_modules/babel-plugin-proposal-optional-catch-binding'),
                     path.resolve('../node_modules/babel-plugin-transform-es2015-literals'),
                     path.resolve('../node_modules/babel-plugin-transform-es2015-object-super'),
                     path.resolve('../node_modules/babel-plugin-transform-es2015-parameters'),
                     path.resolve('../node_modules/@babel/parser'),
                     path.resolve('../node_modules/babel-traverse'),
                     path.resolve('../node_modules/babylon'),
                     path.resolve('../node_modules/@babel/cli'),
                     path.resolve('../node_modules/watchpack'),
                     path.resolve('../node_modules/consolidate'),
                     path.resolve('../node_modules/express'),
                     path.resolve('../node_modules/import-local'),
                     path.resolve('../node_modules/webpack'),
                     path.resolve('../node_modules/webpack-cli'),
                     path.resolve('../node_modules/webpack-dev-server'),
                     path.resolve('../node_modules/html-webpack-plugin/lib/compiler.js'),
                     path.resolve('../node_modules/@babel/core'),
                     path.resolve('../node_modules/@babel/core/lib/functional.js'),
                     path.resolve('../contentCode')
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
