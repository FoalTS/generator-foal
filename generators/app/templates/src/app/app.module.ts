import { view } from '@foal/common';
import { Module } from '@foal/core';

import { IndexViewService } from './index-view.service';
import { config } from '../config';

export const AppModule: Module = {
  controllers: [
    view
      .attachService('/', IndexViewService)
      .withPreHook(ctx => ctx.state.appName = config.app.name)
  ],
};
