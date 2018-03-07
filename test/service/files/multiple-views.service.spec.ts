import { expect } from 'chai';

import { FooBarService } from './foo-bar.service';

describe('FooBarService', () => {

  describe('when render is called', () => {

    it('should return the expected string.', async () => {
      const service = new FooBarService();
      const actual = await service.render('view1', {});

      expect(actual).to.equal('');
    });

  });

});
