const { camelCase, kebabCase, upperFirst } = require('lodash');

module.exports.getNames = function(name) {
  return {
    camelName: camelCase(name),
    CamelName: upperFirst(camelCase(name)),
    kebabName: kebabCase(name)
  };
}