import { Context, postHook, PostMiddleware } from '@foal/core';

export function make<%= CamelName %>Middleware(): PostMiddleware {
  return function <%= camelName %>Middleware(ctx: Context): void {

  };
}

export function <%= camelName %>() {
  return postHook(make<%= CamelName %>Middleware());
}
