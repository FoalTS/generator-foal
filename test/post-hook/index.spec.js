const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/post-hook'))
        .withArguments([name]);
    });
  
    it('should generate a post-hook in file "foo-bar.post-hook.ts".', async () => {
      assert.file(['foo-bar.post-hook.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.post-hook.ts');
      assert.fileContent('foo-bar.post-hook.ts', fileContent)
    });
  
    it('should generate a post-hook test in file "foo-bar.post-hook.spec.ts".', async () => {
      assert.file(['foo-bar.post-hook.spec.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.post-hook.spec.ts');
      assert.fileContent('foo-bar.post-hook.spec.ts', fileContent)
    });
  });
}

describe('foal:post-hook', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
