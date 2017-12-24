import { CRUDService } from '@foal/common';
import { ObjectType, Service } from '@foal/core';

@Service()
export class <%= CamelName %>Service implements CRUDService {
  constructor() {}

  public create(data: any, query: ObjectType) {
    
  }

  public get(id: any, query: ObjectType) {

  }

  public getAll(query: ObjectType) {

  }

  public replace(id: any, data: any, query: ObjectType) {

  }

  public modify(id: any, data: any, query: ObjectType) {

  }

  public delete(id: any, query: ObjectType) {

  }
}
