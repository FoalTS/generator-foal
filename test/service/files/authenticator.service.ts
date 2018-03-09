import { IAuthenticator } from '@foal/authentication';
import { Service } from '@foal/core';

import { User } from 'somewhere';

@Service()
export class FooBarService implements IAuthenticator<User> {
  constructor() {}

  public authenticate(credentials): User | null | Promise<User | null> {
    return null;
  }

}
