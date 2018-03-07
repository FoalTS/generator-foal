import { Service } from '@foal/core';
import { MultipleEjsTemplatesService } from '@foal/ejs';

@Service()
export class FooBarService extends MultipleEjsTemplatesService {
  constructor() {
    super({
      view1: './templates/foo-bar.html'
    });
  }
}
