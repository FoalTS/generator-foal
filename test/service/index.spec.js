const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithType(name, type, specFile = true) {
  describe(`with prompt type=${type}`, () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/service'))
        .withArguments([name])
        .withPrompts({ type });
    });
  
    it(`should generate a service (${type}) in file "foo-bar.service.ts".`, async () => {
      assert.file(['foo-bar.service.ts']);
      const fileContent = await readFile(__dirname, `./files/${type}.service.ts`);
      assert.fileContent('foo-bar.service.ts', fileContent);
    });
  
    if (specFile) {
      it('should generate a service test (${type}) in file "foo-bar.service.spec.ts".', async () => {
        assert.file(['foo-bar.service.spec.ts']);
        const fileContent = await readFile(__dirname, `./files/${type}.service.spec.ts`);
        assert.fileContent('foo-bar.service.spec.ts', fileContent);
      });
    }

  });

}

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {

    testWithType(name, 'empty');
    testWithType(name, 'local-authenticator', false);
    testWithType(name, 'ejs-template');
    testWithType(name, 'multiple-ejs-templates');
    // testWithType(name, 'sequelize-model');
    // testWithType(name, 'sequelize-connection');
    // testWithType(name, 'authenticator');
    // testWithType(name, 'model');
    // testWithType(name, 'view');
    // testWithType(name, 'multiple-views');
  
  });
}

describe('foal:module', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
