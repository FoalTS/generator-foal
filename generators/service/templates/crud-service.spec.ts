import { <%= CamelName %>Service } from './<%= kebabName %>.service';

describe('<%= CamelName %>Service', () => {

  let service: <%= CamelName %>Service;

  it('should instantiate.', () => {
    service = new <%= CamelName %>Service();
  });

  describe('when create(data: any, query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

  describe('when get(id: any, query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

  describe('when getAll(query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

  describe('when replace(id: any, data: any, query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

  describe('when modify(id: any, data: any, query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

  describe('when delete(id: any, query: ObjectType) is called', () => {

    it('should do something.', () => {

    });

  });

});
