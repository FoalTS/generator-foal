const Generator = require('yeoman-generator');

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
  }

  prompting() {
    return this.prompt([
      {
        type: 'confirm',
        name: 'vscode',
        message: 'Add default VSCode config files for debugging?',
        default: true
      }
    ]).then(({ vscode }) => this.vscode = vscode);
  }

  writing() {
    const paths = [
      'src/app/app.module.ts',
      'src/config/config.ts',
      'src/config/index.ts',
      'src/main.spec.ts',
      'src/main.ts',

      'package.json',
      'tsconfig.json',
      'tslint.json',
    ];
    if (this.vscode) {
      paths.push('.vscode/launch.json');
      paths.push('.vscode/tasks.json');
    }
    for (let path of paths) {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(`${this.names.kebabName}/${path}`),
        this.names
      );
    }
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath(`${this.names.kebabName}/.gitignore`),
      this.names
    );
  }

  install() {
    this.npmInstall([
      'body-parser',
      'express',
      '@types/node',
      '@foal/core@0.3.0',
      '@foal/express@0.3.0'
    ], { 'save': true }, () => {}, { cwd: this.names.kebabName });
    this.npmInstall([
      'nodemon',
      'mocha',
      'chai',
      '@types/mocha',
      '@types/chai',
      'typescript',
      'tslint'
    ], { 'save-dev': true }, () => {}, { cwd: this.names.kebabName });
  }
};
