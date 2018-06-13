import { ModelService, Service } from '@foal/core';

import { MyModel } from 'somewhere';

@Service()
export class FooBar extends ModelService<MyModel> {
  Model = MyModel;
}