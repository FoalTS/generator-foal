import { NextFunction, Request, Response } from 'express';

import { newExpressDecorator } from '@foal/core';

export function <%= camelName %>Middleware(req: Request, res: Response, next: NextFunction): any {

  next();
}

export function <%= camelName %>() {
  return newExpressDecorator(<%= camelName %>Middleware);
}
