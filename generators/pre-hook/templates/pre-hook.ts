import { Context, preHook, PreMiddleware } from '@foal/core';

export function make<%= CamelName %>Middleware(): PreMiddleware {
  return function <%= camelName %>Middleware(ctx: Context): void {

  };
}

export function <%= camelName %>() {
  return preHook(make<%= CamelName %>Middleware());
}
