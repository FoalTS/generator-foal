const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the service'
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
        choices: [
          'None',
          'CRUD',
          {
            name: 'EJS (template)',
            value: 'EJS'
          },
          'Partial CRUD',
          'Sequelize',
          'Sequelize connection',
          'View'
        ],
        default: 0
      }
    ]).then(({ type }) => this.type = type.toLowerCase().replace(' ', '-'));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.type}-service.ts`),
      this.destinationPath(`${this.names.kebabName}.service.ts`),
      Object.assign({
        underscoreName: `${this.names.kebabName.replace(/-/g,'_')}`
      }, this.names)
    );
    this.fs.copyTpl(
      this.templatePath(`${this.type}-service.spec.ts`),
      this.destinationPath(`${this.names.kebabName}.service.spec.ts`),
      this.names
    );
  }
};
