import { LocalAuthenticatorService } from '@foal/authentication';
import { Service } from '@foal/core';

import { UserService } from 'somewhere';

@Service()
export class <%= CamelName %>Service extends LocalAuthenticatorService {
  constructor(userService: UserService) {
    super(userService);
  }
}
