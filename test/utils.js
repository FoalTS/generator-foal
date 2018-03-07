const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

module.exports.readFile = function readFile(dirname, filePath) {
  return promisify(fs.readFile)(path.join(dirname, filePath), 'utf8')
}
