import { EmailAuthenticatorService } from '@foal/authentication';
import { Service } from '@foal/core';

import { User } from 'somewhere';
import { UserService } from 'somewhere';

@Service()
export class <%= CamelName %>Service extends EmailAuthenticatorService<User> {
  constructor(userService: UserService) {
    super(userService);
  }

}
