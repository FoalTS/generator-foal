const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the controller binder'
    });
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('controller-binder.ts'),
      this.destinationPath(`${this.names.kebabName}.binder.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath('controller-interface.ts'),
      this.destinationPath(`${this.names.kebabName}.interface.ts`),
      this.names
    );
  }
};
