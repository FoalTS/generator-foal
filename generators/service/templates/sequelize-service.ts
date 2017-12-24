import { Service } from '@foal/core';
import { SequelizeService } from '@foal/sequelize';

import { MySequelizeConnection } from 'somewhere';

@Service()
export class <%= CamelName %>Service extends SequelizeService<any> {
  constructor(protected connection: MySequelizeConnection) {
    super('<%= underscoreName %>s', {
      // Schema
    }, connection);
  }
}
