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
    this.argument('type', {
      type: String,
      required: false,
      desc: 'sequelize|sequelize-connection'
    });    
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    if (!this.options.type) {
      this.fs.copyTpl(
        this.templatePath('service.ts'),
        this.destinationPath(`${this.names.kebabName}.service.ts`),
        this.names
      );
      return;
    }
    if (!['sequelize', 'sequelize-connection'].includes(this.options.type)) {
      this.log('Please enter a valid type: sequelize|sequelize-connection');
      return;
    }
    this.fs.copyTpl(
      this.templatePath(`${this.options.type}-service.ts`),
      this.destinationPath(`${this.names.kebabName}.service.ts`),
      Object.assign({
        underscoreName: `${kebabName.replace(/-/g,'_')}`
      }, this.names)
    );
  }
};
