const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the decorator'
    });
    this.argument('type', {
      type: String,
      required: true,
      desc: 'contextual|express'
    });    
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    if (!['contextual', 'express'].includes(this.options.type)) {
      this.log('Please enter a valid type: contextual|express');
      return;
    }
    this.fs.copyTpl(
      this.templatePath(`${this.options.type}-decorator.ts`),
      this.destinationPath(`${this.names.kebabName}.decorator.ts`),
      this.names
    );
  }
};
