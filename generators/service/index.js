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
    function choice(name, value = name) {
      return { name, value };
    }
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Type',
        choices: [
          choice('Empty', 'empty'),
          choice('[Authenticator] Email authenticator', 'email-authenticator'),
          choice('[View] Single EJS template', 'ejs-template'),
          choice('[MultipleViews] Multiple EJS templates', 'multiple-ejs-templates'),
          choice('[Model] Sequelize model (PostgreSQL, SQLite)', 'sequelize-model'),
          choice('Sequelize connection (PostgreSQL, SQLite)', 'sequelize-connection'),
          choice('Authenticator (to implement)', 'authenticator'),
          // choice('Model (to implement)', 'model'),
          choice('View (to implement)', 'view'),
          choice('Multiple views (to implement)', 'multiple-views'),
        ],
        default: 0
      }
    ]).then(({ type }) => this.type = type);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`${this.type}-service.ts`),
      this.destinationPath(`${this.names.kebabName}.service.ts`),
      Object.assign({
        underscoreName: `${this.names.kebabName.replace(/-/g,'_')}`
      }, this.names)
    );
    if (this.type !== 'email-authenticator' && this.type !== 'sequelize-model') {
      this.fs.copyTpl(
        this.templatePath(`${this.type}-service.spec.ts`),
        this.destinationPath(`${this.names.kebabName}.service.spec.ts`),
        this.names
      );
    }
  }
};
