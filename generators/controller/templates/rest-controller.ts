import { Injectable, RestController, RestParams } from '@foal/core';

@Injectable()
export class <%= CamelName %>Controller implements RestController {
  constructor() {}

  public async create(data: any, params: RestParams): Promise<any> {
  }

  public async get(id: any, params: RestParams): Promise<any> {
  }

  public async update(id: any, data: any, params: RestParams): Promise<any> {
  }

  public async patch(id: any, data: any, params: RestParams): Promise<any> {
  }

  public async delete(id: any, params: RestParams): Promise<any> {
  }
}
