import { Service } from '@foal/core';
import { SequelizeModelService } from '@foal/sequelize';

import { ConnectionService } from './connection.service';

@Service()
export class FooBarService extends SequelizeModelService<any> {
  constructor(connection: ConnectionService) {
    super('foo_bars', {
      // Schema
    }, connection);
  }

}