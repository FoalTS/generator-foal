const Generator = require('yeoman-generator');
const crypto = require('crypto');
const mkdirp = require('mkdirp');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the app'
    });
  }

  initializing() {
    this.names = getNames(this.options.name);
    this.log(
`
     _______   ________   ____        ___     _________   _______
    /  ____/  / ____  /  / _  |      /  /    /___  ___/  / _____/
   /  /___   / /   / /  / /_| |     /  /        / /     / /____
  /  ____/  / /   / /  / ___  |    /  /        / /     /____  /
 /  /      / /__ / /  / /   | |   /  /____    / /     _____/ /
/__/      /_______/  /_/    |_|  /_______/   /_/     /______/

`
    );
  }

  writing() {
    const locals = {
      ...this.names,
      csrfToken: '<%= csrfToken %>',
      appName: '<%= appName %>',
      sessionSecret: crypto.randomBytes(16).toString('hex'),
    }
    const paths = [
      'config/app.development.json',
      'config/app.production.json',
      'config/app.test.json',
      'config/settings.development.json',
      'config/settings.json',
      'config/settings.production.json',

      'src/app/handlers/index.ts',
      'src/app/handlers/test.ts',
      'src/app/hooks/index.ts',
      'src/app/hooks/test.ts',
      'src/app/models/index.ts',
      'src/app/models/test.ts',
      'src/app/modules/index.ts',
      'src/app/modules/test.ts',
      'src/app/services/index.ts',
      'src/app/services/test.ts',
      'src/app/templates/index.html',
      'src/app/templates/index.ts',
      'src/app/templates/test.ts',
      'src/app/app.module.ts',
      'src/app/test.ts',

      'src/index.ts',
      'src/test.ts',

      'ormconfig.json',
      'package.json',
      'tsconfig.json',
      'tslint.json',
    ];
    for (let path of paths) {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(`${this.names.kebabName}/${path}`),
        locals
      );
    }
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath(`${this.names.kebabName}/.gitignore`),
      locals
    );
    this.fs.copy(
      this.templatePath('public/logo.png'),
      this.destinationPath(`${this.names.kebabName}/public/logo.png`),
    );
    this.fs.copy(
      this.templatePath('../../../node_modules/bootstrap/dist/css/bootstrap.min.css'),
      this.destinationPath(`${this.names.kebabName}/public/bootstrap.min.css`),
    );
  }

  install() {
    this.npmInstall([], {}, () => {}, { cwd: this.names.kebabName });
  }
};
