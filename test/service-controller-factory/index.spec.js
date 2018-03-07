const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/service-controller-factory'))
        .withArguments([name]);
    });
  
    it('should generate a service controller factory in file "foo-bar.controller-factory.ts".', async () => {
      assert.file(['foo-bar.controller-factory.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.controller-factory.ts');
      assert.fileContent('foo-bar.controller-factory.ts', fileContent);
    });
  
    it('should generate a service controller factory test in file "foo-bar.controller-factory.spec.ts".', async () => {
      assert.file(['foo-bar.controller-factory.spec.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.controller-factory.spec.ts');
      assert.fileContent('foo-bar.controller-factory.spec.ts', fileContent);
    });

    it('should generate a service interface in file "foo-bar.interface.ts".', async () => {
      assert.file(['foo-bar.interface.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.interface.ts');
      assert.fileContent('foo-bar.interface.ts', fileContent);
    });
  });
}

describe('foal:service-controller-factory', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
