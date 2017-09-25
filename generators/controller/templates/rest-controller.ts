import { Injectable, RestController, RestParams } from '@foal/core';

@Injectable()
export class <%= CamelName %>Controller implements RestController {
  constructor () {}

  async create(data: any, params: RestParams): Promise<any> {
  }

  async get(id: any, params: RestParams): Promise<any> {
  }

  async update(id: any, data: any, params: RestParams): Promise<any> {
  }

  async patch(id: any, data: any, params: RestParams): Promise<any> {
  }

  async delete(id: any, params: RestParams): Promise<any> {
  }
}
