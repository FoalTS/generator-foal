import { AbstractEmailAuthenticator, Service } from '@foal/core';

import { User } from 'somewhere';

@Service()
export class FooBar extends AbstractEmailAuthenticator<User> {
  UserClass = User;
}
