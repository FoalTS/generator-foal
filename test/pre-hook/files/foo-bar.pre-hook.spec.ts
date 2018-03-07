import { createEmptyContext, ServiceManager } from '@foal/core';

import { fooBar } from './foo-bar.pre-hook';

describe('fooBar', () => {

  it('should do something.', () => {
    const preHook = fooBar();
    const ctx = createEmptyContext();

    preHook(ctx, new ServiceManager());
  });

});
