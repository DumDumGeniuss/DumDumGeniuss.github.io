var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  output: {
    path: path.join(__dirname),
    filename: "./dist/client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
};