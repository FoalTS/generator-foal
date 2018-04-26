import { Class, Controller, HttpReponseOK, IServiceControllerFactory } from '@foal/core';

import { IFooBar } from './foo-bar.interface';

export type RouteName = 'main';

export class FooBarFactory implements IServiceControllerFactory {

  public attachService(path: string, ServiceClass: Class<IFooBar>): Controller<RouteName> {
    const controller = new Controller<RouteName>(path);
    controller.addRoute('main', 'GET', '', (ctx, services) => {
      console.log(services.get(ServiceClass));
      return new HttpReponseOK();
    });
    return controller;
  }

}

export const fooBar = new FooBarFactory();
