const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/pre-hook'))
        .withArguments([name]);
    })
  
    it('should generate a pre-hook in file "foo-bar.pre-hook.ts".', async () => {
      assert.file(['foo-bar.pre-hook.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.pre-hook.ts');
      assert.fileContent('foo-bar.pre-hook.ts', fileContent)
    });
  
    it('should generate a pre-hook test in file "foo-bar.pre-hook.spec.ts".', async () => {
      assert.file(['foo-bar.pre-hook.spec.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.pre-hook.spec.ts');
      assert.fileContent('foo-bar.pre-hook.spec.ts', fileContent)
    });
  });
}

describe('foal:pre-hook', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
