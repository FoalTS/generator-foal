import { Service } from '@foal/core';
import { MultipleEjsTemplatesService } from '@foal/ejs';

@Service()
export class <%= CamelName %>Service extends MultipleEjsTemplatesService {
  constructor() {
    super({
      index: './templates/<%= kebabName %>/index.html'
    });
  }
}
