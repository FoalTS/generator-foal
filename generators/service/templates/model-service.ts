import { ModelService, Service } from '@foal/core';

import { MyModel } from 'somewhere';

@Service()
export class <%= CamelName %> extends ModelService<MyModel> {
  Model = MyModel;
}
