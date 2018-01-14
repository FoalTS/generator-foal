import { createEmptyContext } from '@foal/core';
import { expect } from 'chai';

import { <%= CamelName %>Service } from './<%= kebabName %>-service.interface';
import { <%= camelName %>, <%= CamelName %>Factory } from './<%= kebabName %>.controller-factory';

describe('<%= camelName %>', () => {

  let mock: <%= CamelName %>Service;

  before(() => {
    mock = {};
  });

  it('should be an instance of <%= CamelName %>Factory', () => {
    expect(<%= camelName %>).to.an.instanceOf(<%= CamelName %>Factory);
  });

  describe('when getRoutes(service: <%= CamelName %>Service): Route[] is called with the mock service', () => {

    it('should return the proper Route array.', () => {
      const actual = <%= camelName %>.getRoutes(mock);
    });

  });

});
