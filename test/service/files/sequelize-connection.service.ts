import { Service } from '@foal/core';
import { SequelizeConnectionService } from '@foal/sequelize';

import { config } from '../config';

@Service()
export class FooBarService extends SequelizeConnectionService {
  constructor() {
    super(config.db.uri, config.db.options);
  }
}
