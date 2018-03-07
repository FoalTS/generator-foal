import { MultipleViewsService } from '@foal/common';
import { ObjectType, Service } from '@foal/core';

@Service()
export class FooBarService implements MultipleViewsService {
  constructor() {}

  public render(name: string, locals: ObjectType): string | Promise<string> {
    return '';
  }
}
