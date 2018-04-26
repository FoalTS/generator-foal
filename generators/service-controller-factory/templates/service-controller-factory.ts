import { Class, Controller, HttpReponseOK, IServiceControllerFactory } from '@foal/core';

import { I<%= CamelName %> } from './<%= kebabName %>.interface';

export type RouteName = 'main';

export class <%= CamelName %>Factory implements IServiceControllerFactory {

  public attachService(path: string, ServiceClass: Class<I<%= CamelName %>>): Controller<RouteName> {
    const controller = new Controller<RouteName>(path);
    controller.addRoute('main', 'GET', '', (ctx, services) => {
      console.log(services.get(ServiceClass));
      return new HttpReponseOK();
    });
    return controller;
  }

}

export const <%= camelName %> = new <%= CamelName %>Factory();
