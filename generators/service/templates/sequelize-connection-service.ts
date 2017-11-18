import { Service } from '@foal/core';
import { SequelizeConnectionService } from '@foal/sequelize';

import { config } from 'path/to/config';

@Service()
export class <%= CamelName %>Service extends SequelizeConnectionService {
  constructor() {
    super(config.db.uri);
  }
}
