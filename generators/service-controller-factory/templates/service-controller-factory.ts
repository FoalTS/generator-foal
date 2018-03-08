import { Controller, Class, HttpReponseOK, ServiceControllerFactory } from '@foal/core';

import { I<%= CamelName %> } from './<%= kebabName %>.interface';

export type RouteName = 'main';

export class <%= CamelName %>Factory extends ServiceControllerFactory<I<%= CamelName %>, RouteName> {

  protected defineController(controller: Controller<RouteName>,
                             ServiceClass: Class<I<%= CamelName %>>) {
    controller.addRoute('main', 'GET', '/', (ctx, services) => {
      console.log(services.get(ServiceClass));
      return new HttpReponseOK();
    });
  }

}

export const <%= camelName %> = new <%= CamelName %>Factory();
