import { createEmptyContext, ServiceManager } from '@foal/core';

import { <%= camelName %> } from './<%= kebabName %>.pre-hook';

describe('<%= camelName %>', () => {

  it('should do something.', () => {
    const preHook = <%= camelName %>();
    const ctx = createEmptyContext();

    preHook(ctx, new ServiceManager());
  });

});
