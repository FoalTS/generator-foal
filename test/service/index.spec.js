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
    testWithType(name, 'email-authenticator', false);
    testWithType(name, 'sequelize-model', false);
    testWithType(name, 'authenticator');
  
  });
}

describe('foal:module', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
