const webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style!css!sass'
				]
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
				options: {
					extractCSS: true
				}
			}
		]
	},
	entry: [
		'./src/main.js'
	],
	//输出文件出口
	output: {
		path: '/dist',  //输出路径
		filename: '[name].js'     //输出文件名，文件可以自己定义，[name]的意思是与入口文件的文件对应，可以不用[name]，
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};