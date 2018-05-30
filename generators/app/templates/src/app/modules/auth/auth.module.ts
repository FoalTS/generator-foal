import { login, logout, Module, render, route, view } from '@foal/core';

import { Authenticator } from './authenticator.service';

export const AuthModule: Module = {
  controllers: [
    login('/email', Authenticator, {
      failureRedirect: '/auth?invalid_credentials=true', // Optional
      successRedirect: '/whatever_you_like', // Optional
    }),
    logout('/logout', { redirect: '/auth' }),
    route('/', 'GET', ctx => render(require('./templates/login.html'), {
      csrfToken: ctx.state.csrfToken,
      invalidCredentials: ctx.query.invalid_credentials
    }))
  ],
  path: '/auth',
};
