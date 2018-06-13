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
      const fileContent = await readFile(__dirname, './files/index.ts');
      assert.fileContent('foo-bar/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/handlers/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/handlers/index.ts']);
      const fileContent = await readFile(__dirname, './files/handlers/index.ts');
      assert.fileContent('foo-bar/handlers/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/hooks/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/hooks/index.ts']);
      const fileContent = await readFile(__dirname, './files/hooks/index.ts');
      assert.fileContent('foo-bar/hooks/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/models/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/models/index.ts']);
      const fileContent = await readFile(__dirname, './files/models/index.ts');
      assert.fileContent('foo-bar/models/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/modules/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/modules/index.ts']);
      const fileContent = await readFile(__dirname, './files/modules/index.ts');
      assert.fileContent('foo-bar/modules/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/services/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/services/index.ts']);
      const fileContent = await readFile(__dirname, './files/services/index.ts');
      assert.fileContent('foo-bar/services/index.ts', fileContent);
    });
  
    it('should generate an "foo-bar/templates/index.ts" file which exports the module.', async () => {
      assert.file(['foo-bar/templates/index.ts']);
      const fileContent = await readFile(__dirname, './files/templates/index.ts');
      assert.fileContent('foo-bar/templates/index.ts', fileContent);
    });
  
  });
}

describe('foal:module', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
