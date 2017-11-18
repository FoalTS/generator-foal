import { make<%= CamelName %>Middleware } from './<%= kebabName %>.pre-hook';

describe('make<%= CamelName %>Middleware', () => {

  let middleware: PreMiddleware;

  it('when it is called should return a middleware.', () => {
    middleware = make<%= CamelName %>Middleware();
  });
});