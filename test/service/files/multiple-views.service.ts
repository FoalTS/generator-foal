import { IMultipleViews } from '@foal/common';
import { ObjectType, Service } from '@foal/core';

@Service()
export class FooBarService implements IMultipleViews {
  constructor() {}

  public render(name: string, locals: ObjectType): string | Promise<string> {
    return '';
  }
}
