import { createEmptyPostContext, ServiceManager } from '@foal/core';

import { <%= camelName %> } from './<%= kebabName %>.post-hook';

describe('<%= camelName %>', () => {

  it('should do something.', () => {
    const postHook = <%= camelName %>();
    const ctx = createEmptyPostContext();

    postHook(ctx, new ServiceManager());
  });

});
