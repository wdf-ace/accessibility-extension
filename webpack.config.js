const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(path.join(__dirname, 'public')),
    filename: 'bundle.js',
  },
};