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
      this.templatePath('controller-factory.ts'),
      this.destinationPath(`${this.names.kebabName}.controller-factory.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath('service-interface.ts'),
      this.destinationPath(`${this.names.kebabName}-service.interface.ts`),
      this.names
    );
  }
};
