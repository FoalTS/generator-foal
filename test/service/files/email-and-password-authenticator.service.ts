import { EmailAndPasswordAuthenticatorService } from '@foal/authentication';
import { Service } from '@foal/core';

import { User, UserService } from 'somewhere';

@Service()
export class FooBarService extends EmailAndPasswordAuthenticatorService<User> {
  constructor(userService: UserService) {
    super(userService);
  }

}
