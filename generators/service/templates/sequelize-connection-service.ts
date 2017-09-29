import { Service } from '@foal/core';
import { SequelizeConnectionService } from '@foal/sequelize';

@Service()
class <%= CamelName %> extends SequelizeConnectionService {
  constructor() {
    super('my_uri');
  }
}
