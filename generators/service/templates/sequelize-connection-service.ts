import { Service } from '@foal/core';
import { SequelizeConnectionService } from '@foal/sequelize';

@Service()
export class <%= CamelName %>Service extends SequelizeConnectionService {
  constructor() {
    super('my_uri');
  }
}
