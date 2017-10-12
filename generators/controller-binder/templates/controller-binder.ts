import { ControllerBinder, NotImplementedError } from '@foal/core';
import { Router } from 'express';

import { <%= CamelName %>Controller } from './<%= kebabName %>.interface';

class <%= CamelName %>Binder extends ControllerBinder<<%= CamelName %>Controller> {
  protected expressRouter(path: string, controller: <%= CamelName %>Controller, getExpressMiddlewares): Router {
    const router = Router();

    // Enter your code here.
    // You should use getExpressMiddlewares(methodName: string) on every route to execute
    // controller decorators.
    // Use attributes from the `context` to call the controller methods. `context` may be found
    // at `req.foal.context`.

    return router;
  }
}

export const <%= camelName %> = new <%= CamelName %>Binder();
