import { ModelService, Service } from '@foal/core';

import { MyEntityClass } from 'somewhere';

@Service()
export class FooBar extends ModelService<MyEntityClass> {
  Entity = MyEntityClass;
}