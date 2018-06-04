import { getConfig, Module, view } from '@foal/core';

import { index } from './templates';

export const AppModule: Module = {
  controllers: [
    view('/', index, { appName: getConfig('base').app.name } )
  ],
};
