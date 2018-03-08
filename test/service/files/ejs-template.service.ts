import { Service } from '@foal/core';
import { EjsTemplateService } from '@foal/ejs';

@Service()
export class FooBarService extends EjsTemplateService {
  constructor() {
    super('./templates/foo-bar.html');
  }
}
