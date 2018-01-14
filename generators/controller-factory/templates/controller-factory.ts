import { ControllerFactory, Route } from '@foal/core';

import { <%= CamelName %>Service } from './<%= kebabName %>-service.interface';

export class <%= CamelName %>Factory extends ControllerFactory<<%= CamelName %>Service> {
  public getRoutes(service: <%= CamelName %>Service): Route[] {
    return [

    ];
  }
}

export const <%= camelName %> = new <%= CamelName %>Factory();
