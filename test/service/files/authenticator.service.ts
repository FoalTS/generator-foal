import { IAuthenticator, Service } from '@foal/core';

import { User } from 'somewhere';

@Service()
export class FooBarService implements IAuthenticator<User> {

  validate(credentials) {

  }

  authenticate(credentials): User | null | Promise<User | null> {
    return null;
  }

}
