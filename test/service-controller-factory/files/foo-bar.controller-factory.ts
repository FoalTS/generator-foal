import { Controller, Class, HttpReponseOK, ServiceControllerFactory } from '@foal/core';

import { IFooBar } from './foo-bar.interface';

export type RouteName = 'main';

export class FooBarFactory extends ServiceControllerFactory<IFooBar, RouteName> {

  protected defineController(controller: Controller<RouteName>,
                             ServiceClass: Class<IFooBar>) {
    controller.addRoute('main', 'GET', '/', (ctx, services) => {
      console.log(services.get(ServiceClass));
      return new HttpReponseOK();
    });
  }

}

export const fooBar = new FooBarFactory();
