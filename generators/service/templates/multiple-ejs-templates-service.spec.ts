import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;

  it('should instantiate.', () => {
    service = new <%= CamelName %>Service();
  });

  describe('when render is called', () => {

    it('should return the rendered template.', () => {

    });

  });

});
