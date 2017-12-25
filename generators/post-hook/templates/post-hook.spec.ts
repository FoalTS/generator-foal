import { getPostMiddleware, ServiceManager } from '@foal/core';
import { expect } from 'chai';

import { <%= camelName %> } from './<%= kebabName %>.post-hook';

describe('<%= camelName %>', () => {

  it('should do something.', () => {
    const middleware = getPostMiddleware(<%= camelName %>());
    const ctx = {} as Context;

    middleware(ctx, new ServiceManager());
  });
});
