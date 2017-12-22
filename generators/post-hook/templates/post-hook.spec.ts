import { PostMiddleware } from '@foal/core';

import { make<%= CamelName %>Middleware } from './<%= kebabName %>.post-hook';

describe('make<%= CamelName %>Middleware', () => {

  let middleware: PostMiddleware;

  it('when it is called should return a middleware.', () => {
    middleware = make<%= CamelName %>Middleware();
  });
});
