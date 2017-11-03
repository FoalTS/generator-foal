import { ControllerBinder, MethodPrimitiveBinding } from '@foal/core';

import { <%= CamelName %>Controller } from './<%= kebabName %>.interface';

export class <%= CamelName %>Binder extends ControllerBinder<<%= CamelName %>Controller> {
  protected bind(controller: <%= CamelName %>Controller): MethodPrimitiveBinding[] {
    return [

    ];
  }
}

export const <%= camelName %> = new <%= CamelName %>Binder();
