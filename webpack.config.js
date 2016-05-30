var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './app/main.js'
  ],

  devtool: 'eval-source-map',

  // entry:  __dirname + "/app/main.js",

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/app/index.tmpl.html",
    //   filename:'/build/index.html'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'react-hot!babel', include: path.join(__dirname, 'app') },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss?$/, loader: 'style!css!sass', include: path.join(__dirname, 'css') },
      { test: /\.css$/, loader: 'style!css?modules!postcss' }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
};