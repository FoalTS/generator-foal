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
  }

  prompting() {
    return this.prompt([
      {
        type: 'confirm',
        name: 'vscode',
        message: 'Add default VSCode config files for debugging?',
        default: true
      },
      {
        type: 'input',
        name: 'domain',
        message: 'What is your domain (ex: example.com)?',
        default: ''
      },
      {
        type: 'list',
        name: 'database',
        message: 'Which database are you connecting to?',
        choices: [
          { name: 'PostgreSQL', value: 'postgres' },
          { name: 'MySQL', value: 'mysql' },
        ]
      },
      {
        type: 'input',
        name: 'dbName',
        message: 'Database name?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Database username?',
      },
      {
        type: 'password',
        name: 'password',
        message: 'Database password?',
      },
    ]).then(answers =>  this.locals = answers);
  }

  writing() {
    const locals = {
      ...this.names,
      ...this.locals,
      appName: '<%= appName %>',
      devSecret1: crypto.randomBytes(32).toString('hex'),
      prodSecret1: crypto.randomBytes(32).toString('hex'),
      testSecret1: crypto.randomBytes(32).toString('hex'),
      devSecret2: crypto.randomBytes(32).toString('hex'),
      prodSecret2: crypto.randomBytes(32).toString('hex'),
      testSecret2: crypto.randomBytes(32).toString('hex'),
    }
    const paths = [
      'src/app/app.module.ts',
      'src/app/index-view.service.spec.ts',
      'src/app/index-view.service.ts',
      'src/config/config.ts',
      'src/config/index.ts',
      'src/main.ts',

      'templates/index.html',

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
        locals
      );
    }
    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath(`${this.names.kebabName}/.gitignore`),
      locals
    );
    mkdirp.sync(`${this.names.kebabName}/public/`);
  }

  install() {
    switch(this.database) {
      case 'postgres':
        this.npmInstall([ 'pg@6', 'pg-hstore' ], {}, () => {}, { cwd: this.names.kebabName });
        break;
      case 'mysql':
        this.npmInstall([ 'mysql2' ], {}, () => {}, { cwd: this.names.kebabName });
        break;
    }
    this.npmInstall([], {}, () => {}, { cwd: this.names.kebabName });
    this.npmInstall([
      'concurrently',
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
