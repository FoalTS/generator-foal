import { <%= CamelName %>Service } from './<%= kebabName %>.service';

import { UserService } from 'somewhere';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;

  it('should instantiate.', () => {
    service = new <%= CamelName %>Service(new UserService());
  });
});
