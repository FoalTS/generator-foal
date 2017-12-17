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
    const pg = 'pg@6';
    return this.prompt([
      {
        type: 'confirm',
        name: 'vscode',
        message: 'Add default VSCode config files for debugging?',
        default: true
      },
      {
        type: 'checkbox',
        name: 'databases',
        message: 'Which databases will you be using?',
        choices: [
          { name: 'PostgreSQL', value: pg },
          { name: 'Microsoft SQL Server', value: 'tedious' },
          { name: 'MySQL', value: 'mysql2' },
          { name: 'SQLite', value: 'sqlite3' }
        ]
      }
    ]).then(({ vscode, databases }) =>  {
      this.vscode = vscode;
      if (databases.includes(pg)) {
        databases.push('pg-hstore');
      }
      this.databases = databases;
    });
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
    this.npmInstall(this.databases, {}, () => {}, { cwd: this.names.kebabName });
    this.npmInstall([], {}, () => {}, { cwd: this.names.kebabName });
    this.npmInstall([
      'concurrently',
      'source-map-support',
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
