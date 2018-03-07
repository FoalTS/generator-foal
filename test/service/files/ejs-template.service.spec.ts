import { expect } from 'chai';

import { FooBarService } from './foo-bar.service';

const template1 =
``;

describe('FooBarService', () => {

  describe('when render is called', () => {

    it('should return the rendered template.', async () => {
      const service = new FooBarService();
      const actual = await service.render({});

      expect(actual).to.equal(template1);
    });

  });

});