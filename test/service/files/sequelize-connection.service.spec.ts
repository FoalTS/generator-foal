import { expect } from 'chai';

import { FooBarService } from './foo-bar.service';

describe('FooBarService', () => {

  describe('when it is instantiated', () => {

    it('should connect to the database.', () => {
      expect(() => new FooBarService()).not.to.throw();
    });

  });

});
