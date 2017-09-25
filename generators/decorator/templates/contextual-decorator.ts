import { Request, Response, NextFunction } from 'express';

import { Context, newContextualDecorator } from '@foal/core';

export async function <%= camelName %>Middleware(ctx: Context): Promise<Context> {
  return ctx;
}

export function <%= camelName %>() {
  return newContextualDecorator(<%= camelName %>Middleware);
}