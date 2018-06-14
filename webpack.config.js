var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

  mode: "development",
  context: __dirname,

  entry : {
    react_demo: './scout_clients/static/scout_clients/react/demo',
    vue_demo: './scout_clients/static/scout_clients/vuejs/demo',
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
      path: path.resolve('./scout_clients/static/scout_clients/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
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
          },
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          }
      ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }

}
