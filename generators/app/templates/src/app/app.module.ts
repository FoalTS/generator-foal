import { Module, view } from '@foal/core';

import { config } from '../config';<% if (authentication) { %>
import { AuthModule } from './auth';<% } %>

export const AppModule: Module = {
  controllers: [
    view('/', require('./templates/index.html'), { appName: config.app.name } )
  ],<% if (authentication) { %>
  modules: [
    AuthModule
  ]<% } %>
};
