const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const resolve = path.resolve

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(path.join(__dirname, 'public')),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: [resolve(__dirname, './src'), resolve(__dirname, './tests')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    fallback: {
      "fs": false,
      "child_process": false,
      "readline": false
    }
  }
};
