import { Config, Module, view } from '@foal/core';

import { index } from './templates';

export const AppModule: Module = {
  controllers: [
    view('/', index, ctx => ({
      appName: Config.get('app', 'name'),
      csrfToken: ctx.state.csrfToken,
    }))
  ],
};
