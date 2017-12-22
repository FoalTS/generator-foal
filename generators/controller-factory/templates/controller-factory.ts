import { ControllerFactory, Route } from '@foal/core';

import { <%= CamelName %>Service } from './<%= kebabName %>.interface';

export class <%= CamelName %>Factory extends ControllerFactory<<%= CamelName %>Service> {
  protected getRoutes(service: <%= CamelName %>Service): Route[] {
    return [

    ];
  }
}

export const <%= camelName %> = new <%= CamelName %>Factory();
