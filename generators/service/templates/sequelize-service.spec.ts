import { <%= CamelName %>Service } from './<%= kebabName %>.service';
import { MySequelizeConnection } from 'somewhere';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;
  let connection: MySequelizeConnection;

  it('should instantiate.', () => {
    connection = new MySequelizeConnection();
    service = new <%= CamelName %>Service(connection);
  });
});
