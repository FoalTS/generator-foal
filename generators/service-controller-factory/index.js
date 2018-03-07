const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the controller factory'
    });
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('service-controller-factory.ts'),
      this.destinationPath(`${this.names.kebabName}.controller-factory.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath('service-controller-factory.spec.ts'),
      this.destinationPath(`${this.names.kebabName}.controller-factory.spec.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath('service-interface.ts'),
      this.destinationPath(`${this.names.kebabName}.interface.ts`),
      this.names
    );
  }
};