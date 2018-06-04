const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the model'
    });   
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('model.ts'),
      this.destinationPath(`${this.names.kebabName}.model.ts`),
      this.names
    );
  }
};
