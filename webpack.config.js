var path = require('path');

module.exports = {
  entry: 'main.js',
  output: {
    path: 'public',
    filename: 'app.js'
  },
  resolve: {
    "root": __dirname+'/src',
    modulesDirectories: ["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  exclude: path.resolve(__dirname, "node_modules")
};