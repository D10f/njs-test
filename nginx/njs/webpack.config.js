const path = require('path');

module.exports = {
  entry: './browserify.js',
  mode: 'production',
  output: {
    filename: 'wp_out.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false
  },
  node: {
    global: true,
  },
  module : {
    rules: [{
      test: /\.m?js$$/,
      exclude: /(bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ]
        }
      }
    }]
  }
};
// {
//   useBuiltIns: "entry",
//   corejs: "3.8",
//   forceAllTransforms: api.env('production')
// }
