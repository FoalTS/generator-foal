const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the pre-hook'
    });   
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('pre-hook.ts'),
      this.destinationPath(`${this.names.kebabName}.pre-hook.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath('pre-hook.spec.ts'),
      this.destinationPath(`${this.names.kebabName}.pre-hook.spec.ts`),
      this.names
    );
  }
};
