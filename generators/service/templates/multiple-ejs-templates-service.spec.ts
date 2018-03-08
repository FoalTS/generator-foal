import { expect } from 'chai';

import { <%= CamelName %>Service } from './<%= kebabName %>.service';

const template1 =
``;

describe('<%= CamelName %>Service', () => {

  describe('when render is called with "view1"', () => {

    it('should return the rendered template.', async () => {
      const service = new <%= CamelName %>Service();
      const actual = await service.render('view1', {});

      expect(actual).to.equal(template1);
    });

  });

});
