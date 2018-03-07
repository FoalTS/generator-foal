import { ViewService } from '@foal/common';
import { ObjectType, Service } from '@foal/core';

@Service()
export class FooBarService implements ViewService {
  constructor() {}

  public render(locals: ObjectType): string | Promise<string> {
    return '';
  }
}
