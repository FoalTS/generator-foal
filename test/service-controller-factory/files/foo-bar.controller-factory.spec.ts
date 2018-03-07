import {
  createEmptyContext,
  HttpResponseOK,
  Service,
  ServiceManager
} from '@foal/core';
import { expect } from 'chai';

import { IFooBar } from './foo-bar.service';
import { fooBar, FooBarControllerFactory } from './foo-bar.controller-factory';

describe('fooBar', () => {

  @Service()
  class MockService implements IFooBar {
    constructor() {}
    
    // ...
  }

  it('should be an instance of FooBarControllerFactory.', () => {
    expect(fooBar).to.an.instanceOf(FooBarControllerFactory);
  });

  describe('when attachService is called', () => {

    it('should return a controller with a proper "main" route.', () => {
      const controller = fooBar.attachService('/', MockService);
      const actual = controller.getRoute('main');

      expect(actual.httpMethod).to.equal('GET');
      expect(actual.path).to.equal('/');

      const ctx = createEmptyContext();
      let result = actual.handler(ctx, new ServiceManager());
      expect(result).to.be.an.instanceOf(HttpResponseOK);
    });

  });

});
