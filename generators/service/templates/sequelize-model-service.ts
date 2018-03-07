import { Service } from '@foal/core';
import { SequelizeModelService } from '@foal/sequelize';

import { ConnectionService } from './connection.service';

@Service()
export class <%= CamelName %>Service extends SequelizeModelService<any> {
  constructor(connection: ConnectionService) {
    super('<%= underscoreName %>s', {
      // Schema
    }, connection);
  }

}
