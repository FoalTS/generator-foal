const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the module'
    });
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('module.ts'),
      this.destinationPath(`${this.names.kebabName}/${this.names.kebabName}.module.ts`),
      this.names
    );
  }
};
