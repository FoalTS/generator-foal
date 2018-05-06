import {
  createEmptyContext,
  HttpResponseOK,
  Service,
  ServiceManager
} from '@foal/core';
import { expect } from 'chai';

import { <%= camelName %>, <%= CamelName %>ControllerFactory } from './<%= kebabName %>.controller-factory';
import { I<%= CamelName %> } from './<%= kebabName %>.service';

describe('<%= camelName %>', () => {

  @Service()
  class MockService implements I<%= CamelName %> {
    constructor() {}

    // ...
  }

  it('should be an instance of <%= CamelName %>ControllerFactory.', () => {
    expect(<%= camelName %>).to.an.instanceOf(<%= CamelName %>ControllerFactory);
  });

  describe('when attachService is called', () => {

    it('should return a controller with a proper "main" route.', () => {
      const controller = <%= camelName %>.attachService('/foobar', MockService);
      const actual = controller.getRoute('main');

      expect(actual.httpMethod).to.equal('GET');
      expect(actual.path).to.equal('/foobar');

      const ctx = createEmptyContext();
      const result = actual.handler(ctx, new ServiceManager());
      expect(result).to.be.an.instanceOf(HttpResponseOK);
    });

  });

});
