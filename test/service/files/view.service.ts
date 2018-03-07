import { IView } from '@foal/common';
import { ObjectType, Service } from '@foal/core';

@Service()
export class FooBarService implements IView {
  constructor() {}

  public render(locals: ObjectType): string | Promise<string> {
    return '';
  }
}
