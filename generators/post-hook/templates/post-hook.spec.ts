import { createEmptyContext, ServiceManager } from '@foal/core';
import { expect } from 'chai';

import { <%= camelName %> } from './<%= kebabName %>.post-hook';

describe('<%= camelName %>', () => {

  it('should do something.', () => {
    const postHook = <%= camelName %>();
    const ctx = createEmptyContext();

    postHook(ctx, new ServiceManager());
  });
});
