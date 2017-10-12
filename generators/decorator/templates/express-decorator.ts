import { newExpressDecorator } from '@foal/core';
import { NextFunction, Request, Response } from 'express';

export function <%= camelName %>Middleware(req: Request, res: Response, next: NextFunction): any {

  next();
}

export function <%= camelName %>() {
  return newExpressDecorator(<%= camelName %>Middleware);
}
