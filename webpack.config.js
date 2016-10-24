var path = require('path');
var webpack = require("webpack");

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}



module.exports = {
  entry: {
    //polyfills: './app/polyfills.ts',
    main: './app/main.ts',
    vendor: './app/vendor.ts'
  },
  output: {
    filename: './dist/[name].bundle.js',
    publicPath: './',
    libraryTarget: "amd"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'json']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: ''
      },
      // css
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      // json
      {
        test: /\.json$/, 
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ],
  externals: [
    function(context, request, callback) {
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  devtool: 'source-map'
};





















