const Generator = require('yeoman-generator');

const { getNames } = require('../helpers');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {
      type: String,
      required: true,
      desc: 'name of the module'
    });
  }

  initializing() {
    this.names = getNames(this.options.name);
  }

  writing() {
    const files = [
      { source: 'index.ts', target: `${this.names.kebabName}/index.ts` },
      { source: 'module.ts', target: `${this.names.kebabName}/${this.names.kebabName}.module.ts` },
      { source: 'handlers/index.ts', target: `${this.names.kebabName}/handlers/index.ts` },
      { source: 'hooks/index.ts', target: `${this.names.kebabName}/hooks/index.ts` },
      { source: 'models/index.ts', target: `${this.names.kebabName}/models/index.ts` },
      { source: 'modules/index.ts', target: `${this.names.kebabName}/modules/index.ts` },
      { source: 'services/index.ts', target: `${this.names.kebabName}/services/index.ts` },
      { source: 'templates/index.ts', target: `${this.names.kebabName}/templates/index.ts` },
    ]
    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file.source),
        this.destinationPath(file.target),
        this.names
      );
    });
  }
};
