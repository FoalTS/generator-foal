import { Service } from '@foal/core';
import { MultipleEjsTemplatesService } from '@foal/ejs';

@Service()
export class <%= CamelName %>Service extends MultipleEjsTemplatesService {
  constructor() {
    super({
      view1: './templates/<%= kebabName %>.html'
    });
  }
}
