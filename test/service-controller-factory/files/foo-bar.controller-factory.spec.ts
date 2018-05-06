import {
  createEmptyContext,
  HttpResponseOK,
  Service,
  ServiceManager
} from '@foal/core';
import { expect } from 'chai';

import { fooBar, FooBarControllerFactory } from './foo-bar.controller-factory';
import { IFooBar } from './foo-bar.service';

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
      const controller = fooBar.attachService('/foobar', MockService);
      const actual = controller.getRoute('main');

      expect(actual.httpMethod).to.equal('GET');
      expect(actual.path).to.equal('/foobar');

      const ctx = createEmptyContext();
      const result = actual.handler(ctx, new ServiceManager());
      expect(result).to.be.an.instanceOf(HttpResponseOK);
    });

  });

});
