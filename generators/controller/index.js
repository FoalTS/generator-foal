const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the controller'
    });
    this.argument('type', {
      type: String,
      required: true,
      desc: 'basic|rest'
    });    
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    if (!['basic', 'rest'].includes(this.options.type)) {
      this.log('Please enter a valid type: basic|rest');
      return;
    }
    this.fs.copyTpl(
      this.templatePath(`${this.options.type}-controller.ts`),
      this.destinationPath(`${this.names.kebabName}-controller.service.ts`),
      this.names
    );
  }
};
