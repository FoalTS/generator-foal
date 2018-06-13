const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');

const { readFile } = require('../utils');

function testWithName(name) {
  describe(`called with argument name=${name}`, () => {

    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../../generators/model'))
        .withArguments([name]);
    });
  
    it('should generate a model in file "foo-bar.model.ts".', async () => {
      assert.file(['foo-bar.model.ts']);
      const fileContent = await readFile(__dirname, './files/foo-bar.model.ts');
      assert.fileContent('foo-bar.model.ts', fileContent)
    });

  });
}

describe('foal:model', () => {

  testWithName('foo-bar');

  testWithName('FooBar');

});
