import { getPreMiddleware, ServiceManager } from '@foal/core';
import { expect } from 'chai';

import { <%= camelName %> } from './<%= kebabName %>.pre-hook';

describe('<%= camelName %>', () => {

  it('should do something.', () => {
    const middleware = getPreMiddleware(<%= camelName %>());
    const ctx = {} as Context;

    middleware(ctx, new ServiceManager());
  });
});
