import { authentication, validateLocalCredentialsFormat } from '@foal/authentication';
import { view } from '@foal/common';
import { basic, HttpResponseRedirect, Module } from '@foal/core';

import { AuthenticatorService } from './authenticator.service';
import { LoginViewService } from './login-view.service';

export const AuthModule: Module = {
  controllers: [
    authentication
      .attachService('/local', AuthenticatorService, {
        failureRedirect: '/auth?invalid_credentials=true', // Optional
        successRedirect: '/whatever_you_like', // Optional
      })
      .withPreHook(validateLocalCredentialsFormat()),
    basic
      .attachHandlingFunction('POST', 'logout', ctx => {
        delete ctx.session.authentication;
        return new HttpResponseRedirect('/auth');
      }),
    view
      .attachService('/', LoginViewService)
      .withPreHook(ctx => {
        ctx.state.locals = {
          csrfToken: ctx.state.csrfToken,
          invalidCredentials: ctx.query.invalid_credentials
        };
      })
  ],
  path: '/auth',
};
