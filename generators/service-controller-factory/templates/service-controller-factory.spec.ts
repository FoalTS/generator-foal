import {
  createEmptyContext,
  HttpResponseOK,
  Service,
  ServiceManager
} from '@foal/core';
import { expect } from 'chai';

import { I<%= CamelName %> } from './<%= kebabName %>.service';
import { <%= camelName %>, <%= CamelName %>ControllerFactory } from './<%= kebabName %>.controller-factory';

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
      const controller = <%= camelName %>.attachService('/', MockService);
      const actual = controller.getRoute('main');

      expect(actual.httpMethod).to.equal('GET');
      expect(actual.path).to.equal('/');

      const ctx = createEmptyContext();
      let result = actual.handler(ctx, new ServiceManager());
      expect(result).to.be.an.instanceOf(HttpResponseOK);
    });

  });

});
