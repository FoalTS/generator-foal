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
          { name: 'None', value: null },
          { name: 'PostgreSQL', value: 'postgres' },
          { name: 'MySQL', value: 'mysql' },
        ]
      },
      {
        type: 'input',
        name: 'uri',
        message: 'What is your database uri (leave blank if no database)?',
        default: ''
      },
    ]).then(({ vscode, domain, database, uri }) =>  {
      this.vscode = vscode;
      this.domain = domain;
      this.database = database;
      this.uri = uri || 'my_uri' ;
    });
  }

  writing() {
    const locals = {
      ...this.names,
      domain: this.domain,
      uri: this.uri,
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
      'server.js',
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
    this.fs.copy(
      this.templatePath('public/logo.png'),
      this.destinationPath(`${this.names.kebabName}/public/logo.png`),
    )
  }

  install() {
    let dbDependencies = [];
    switch(this.database) {
      case 'postgres':
        dbDependencies = [ '@foal/sequelize@0.4.0-alpha.3', 'pg@6', 'pg-hstore' ];
        break;
      case 'mysql':
        dbDependencies = [ '@foal/sequelize@0.4.0-alpha.3', 'mysql2' ];
        break;
    }
    if (dbDependencies.length !== 0) {
      this.npmInstall(dbDependencies, {}, () => {}, { cwd: this.names.kebabName });
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
