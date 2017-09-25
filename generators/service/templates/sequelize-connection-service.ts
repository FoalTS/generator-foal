import { Injectable } from '@foal/core';
import { SequelizeConnectionService } from '@foal/sequelize';

@Injectable()
class <%= CamelName %> extends SequelizeConnectionService {
  constructor() {
    super('my_uri');
  }
}