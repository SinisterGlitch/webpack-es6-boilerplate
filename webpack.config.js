module.exports = {
  entry: 'main.js',
  output: {
    path: 'public',
    filename: 'app.js'
  },
  resolve: {
    "root": __dirname + '/src',
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
  exclude:  __dirname + "node_modules"
};