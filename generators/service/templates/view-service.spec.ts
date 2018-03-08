import { expect } from 'chai';

import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  describe('when render is called', () => {

    it('should return the expected string.', async () => {
      const service = new <%= CamelName %>Service();
      const actual = await service.render({});

      expect(actual).to.equal('');
    });

  });

});
