import { Service } from '@foal/core';
import { EjsTemplateService } from '@foal/ejs';

@Service()
export class <%= CamelName %>Service extends EjsTemplateService {
  constructor() {
    super('./templates/<%= kebabName %>.html');
  }
}
