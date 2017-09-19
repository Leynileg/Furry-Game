const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: "./js/app.js",
	output: { filename: "./js/out.js" },
	watch: true,
	module: {
        loaders: [
            {
                test: /\.js$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            },
            {
            	test: /\.css$/,
            	loader: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
    new UglifyJSPlugin({
        sourceMap: true
    })
  ]
}