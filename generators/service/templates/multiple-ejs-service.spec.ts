import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;

  it('should instantiate.', () => {
    service = new <%= CamelName %>Service();
  });

  describe('when render(name: string, locals: ObjectType): Promise<string> is called', () => {

    it('should return the rendered template.', () => {

    });

  });

});
