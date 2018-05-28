import { PostContext, ServiceManager } from '@foal/core';

import { fooBar } from './foo-bar.post-hook';

describe('fooBar', () => {

  it('should do something.', () => {
    const postHook = fooBar();
    const ctx = new PostContext();

    postHook(ctx, new ServiceManager());
  });

});
