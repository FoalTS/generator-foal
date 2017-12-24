import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;

  it('should instantiate.', () => {
    service = new <%= CamelName %>Service();
  });

  describe('when render(locals: ObjectType): string is called', () => {

    it('should do something.', () => {

    })

  });

});
