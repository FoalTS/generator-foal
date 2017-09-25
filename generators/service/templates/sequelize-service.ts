import { Injectable } from '@foal/core';
import { SequelizeService } from '@foal/sequelize';

import { MySequelizeConnection } from 'somewhere';

@Injectable()
export class <%= CamelName %> extends SequelizeService {
  constructor(protected connection: MySequelizeConnection) {
    super('<%= underscoreName %>s', {
      // Schema
    }, connection);
  }
}
