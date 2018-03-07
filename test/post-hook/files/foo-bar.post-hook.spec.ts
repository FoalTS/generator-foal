import { createEmptyPostContext, ServiceManager } from '@foal/core';

import { fooBar } from './foo-bar.post-hook';

describe('fooBar', () => {

  it('should do something.', () => {
    const postHook = fooBar();
    const ctx = createEmptyPostContext();

    postHook(ctx, new ServiceManager());
  });

});
