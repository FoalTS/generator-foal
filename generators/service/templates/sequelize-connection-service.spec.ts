import { expect } from 'chai';

import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  describe('when it is instantiated', () => {

    it('should connect to the database.', () => {
      expect(() => new <%= CamelName %>Service()).not.to.throw();
    });

  });

});
