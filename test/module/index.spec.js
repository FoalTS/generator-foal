const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/module'))
        .withArguments([name]);
    });

    it('should generate a module in file "foo-bar/foo-bar.module.ts".', async () => {
      assert.file(['foo-bar/foo-bar.module.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.module.ts');
      assert.fileContent('foo-bar/foo-bar.module.ts', fileContent)
    });
  
    it('should generate an "foo-bar/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/index.ts']);
      assert.fileContent('foo-bar/index.ts', 'export { FooBarModule } from \'./foo-bar.module\';\n')
    });
  
  });
}

describe('foal:module', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
