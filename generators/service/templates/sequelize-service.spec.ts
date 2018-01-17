import { <%= CamelName %>Service } from './<%= kebabName %>.service';
import { ConnectionService } from './connection.service';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;
  let connection: ConnectionService;

  it('should instantiate.', () => {
    connection = new ConnectionService();
    service = new <%= CamelName %>Service(connection);
  });
});
