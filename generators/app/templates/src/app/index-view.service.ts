import { preHook, Service } from '@foal/core';
import { EjsTemplateService } from '@foal/ejs';

import { config } from '../config';

@Service()
@preHook(ctx => ctx.state.appName = config.app.name)
export class IndexViewService extends EjsTemplateService {
  constructor() {
    super('./templates/index.html');
  }
}
