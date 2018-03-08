import { view } from '@foal/common';
import { Module } from '@foal/core';

import { config } from '../config';<% if (authentication) { %>
import { AuthModule } from './auth';<% } %>
import { IndexViewService } from './index-view.service';

export const AppModule: Module = {
  controllers: [
    view
      .attachService('/', IndexViewService)
      .withPreHook(ctx => { ctx.state.locals = { appName: config.app.name }; })
  ],<% if (authentication) { %>
  modules: [
    AuthModule
  ]<% } %>
};
