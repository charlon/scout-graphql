var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {

  mode: "development",
  context: __dirname,

  //entry: './react/js/app', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  entry : {
    hello: './scout_clients/static/scout_clients/react/hello',
    world: './scout_clients/static/scout_clients/react/world',
    apollo: './scout_clients/static/scout_clients/react/apollo'
  },

  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},

  output: {
      path: path.resolve('./scout_clients/static/scout_clients/react/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }

}
