import { validate } from '@foal/ajv';
import { authentication } from '@foal/authentication';
import { basic, HttpResponseRedirect, Module } from '@foal/core';

import { view } from '@foal/common';
import { AuthenticatorService } from './authenticator.service';
import { LoginViewService } from './login-view.service';

export const AuthModule: Module = {
  controllers: [
    authentication
      .attachService('/local', AuthenticatorService, {
        failureRedirect: '/auth?invalid_credentials=true', // Optional
        successRedirect: '/whatever_you_like', // Optional
      })
      .withPreHook(validate({
        additionalProperties: false,
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string' }
        },
        required: [ 'email', 'password' ],
        type: 'object',
      })),
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
