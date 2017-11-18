import { <%= CamelName %>Controller } from './<%= kebabName %>-controller.service';

describe('<%= CamelName %>Controller', () => {

  let controller: <%= CamelName %>Controller;

  it('should instantiate.', () => {
    controller = new <%= CamelName %>Controller();
  });
});
