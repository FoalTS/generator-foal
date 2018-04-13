import { EmailAuthenticatorService } from '@foal/authentication';
import { Service } from '@foal/core';

import { User } from 'somewhere';
import { UserService } from 'somewhere';

@Service()
export class FooBarService extends EmailAuthenticatorService<User> {
  constructor(userService: UserService) {
    super(userService);
  }

}
