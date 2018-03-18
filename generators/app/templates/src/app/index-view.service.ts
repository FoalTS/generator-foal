import { Service } from '@foal/core';
import { EjsTemplateService } from '@foal/ejs';

@Service()
export class IndexViewService extends EjsTemplateService {
  constructor() {
    super(__dirname + '/templates/index.html');
  }
}
