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
    this.isWindows = /^win/.test(process.platform);
  }

  writing() {
    const paths = [
      'bin/www',
      'src/app/app.module.ts',
      'src/index.ts',

      'app.js',
      'package.json',
      'tsconfig.json',
      'tslint.json',
    ];
    for (let path of paths) {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(`${this.names.kebabName}/${path}`),
        Object.assign({ isWindows: this.isWindows }, this.names)
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
      'express',
      '@foal/core',
      '@types/express'
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
