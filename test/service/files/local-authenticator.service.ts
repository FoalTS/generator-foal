import { LocalAuthenticatorService } from '@foal/authentication';
import { Service } from '@foal/core';

import { User } from 'somewhere';
import { UserService } from 'somewhere';

@Service()
export class FooBarService extends LocalAuthenticatorService<User> {
  constructor(userService: UserService) {
    super(userService);
  }

}
