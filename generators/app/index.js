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


Welcome to the FoalTS generator! The following questions will help you create your app.
`
    );
  }

  async prompting() {
    const { database } = await this.prompt([
      {
        type: 'list',
        name: 'database',
        message: 'Which database are you connecting to?',
        choices: [
          { name: 'None', value: null },
          { name: 'SQLite', value: 'sqlite' },
          { name: 'PostgreSQL', value: 'postgres' },
          // { name: 'MySQL', value: 'mysql' },
        ],
        default: 'sqlite'
      },
    ]);
    if (database) {
      this.database = database;

      const { uri, authentication } = await this.prompt([
        {
          type: 'input',
          name: 'uri',
          message: 'What is your database uri?',
          default: database === 'sqlite' ? 'sqlite://database.db' : ''
        },
        {
          type: 'confirm',
          name: 'authentication',
          message: 'Does your application need authentication?',
          default: true
        },
      ]);

      this.uri = uri;

      if (authentication) {
        this.authentication = authentication;

        function choice(name, value = name) {
          return { name, value };
        }
        const { authenticator } = await this.prompt([
          {
            type: 'list',
            name: 'type',
            message: 'Which authenticator do you want to use?',
            choices: [
              choice('Local authenticator (with email and password)', 'local-authenticator'),
              // choice('I\'ll create one on my own.', 'authenticator')
            ],
            default: 0
          }
        ]);
        
        this.authenticator =  authenticator;
      }
    }
    const { domain } = await this.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'What is your domain (ex: example.com)?',
        default: ''
      },
    ]);
    this.domain = domain;
  }

  writing() {
    const locals = {
      ...this.names,
      authentication: this.authentication,
      domain: this.domain,
      uri: this.uri || 'my_uri',
      csrfToken: '<%= csrfToken %>',
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
      'src/app/app.ts',
      'src/app/index-view.service.spec.ts',
      'src/app/index-view.service.ts',
      'src/config/config.ts',
      'src/config/development.ts',
      'src/config/index.ts',
      'src/config/production.ts',
      'src/config/test.ts',
      'src/main.ts',

      'templates/index.html',

      'package.json',
      'server.js',
      'tsconfig.json',
      'tslint.json',
    ];
    if (this.authentication) {
      paths.push(
        'src/app/auth/auth.module.ts',
        'src/app/auth/authenticator.service.ts',
        'src/app/auth/index.ts',
        'src/app/auth/login-view.service.spec.ts',
        'src/app/auth/login-view.service.ts',
        'src/app/shared/connection.service.ts',
        'src/app/shared/index.ts',
        'src/app/shared/user.interface.ts',
        'src/app/shared/user.service.ts',
        'templates/login-view.html',
      );
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
      case 'sqlite':
        dbDependencies.push('@foal/sequelize@0.4.0-beta.1', 'sqlite3');
        break;
      case 'postgres':
        dbDependencies.push('@foal/sequelize@0.4.0-beta.1', 'pg@6', 'pg-hstore');
        break;
      case 'mysql':
        dbDependencies.push('@foal/sequelize@0.4.0-beta.1', 'mysql2');
        break;
    }
    if (this.authentication) {
      dbDependencies.push('@foal/authentication@0.4.0-beta.1', 'bcrypt-nodejs');
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
