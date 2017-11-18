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
  }

  initializing() {
    this.names = getNames(this.options.name);
  }
  
  prompting() {
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Type',
        choices: [ 'REST' ],
        default: 0
      }
    ]).then(({ type }) => this.type = type.toLowerCase());
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.type}-controller.ts`),
      this.destinationPath(`${this.names.kebabName}-controller.service.ts`),
      this.names
    );
    this.fs.copyTpl(
      this.templatePath(`${this.type}-controller.spec.ts`),
      this.destinationPath(`${this.names.kebabName}-controller.service.spec.ts`),
      this.names
    );
  }
};
