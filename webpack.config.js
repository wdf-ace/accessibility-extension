const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(path.join(__dirname, 'public')),
    filename: 'bundle.js',
  },
};