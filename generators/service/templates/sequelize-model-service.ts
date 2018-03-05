import { Service } from '@foal/core';
import { SequelizeService } from '@foal/sequelize';

import { ConnectionService } from './connection.service';

@Service()
export class <%= CamelName %>Service extends SequelizeService<any> {
  constructor(protected connection: ConnectionService) {
    super('<%= underscoreName %>s', {
      // Schema
    }, connection);
  }
}
