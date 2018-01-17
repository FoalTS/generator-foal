import { view } from '@foal/common';
import { FoalModule } from '@foal/core';

import { IndexViewService } from './index-view.service';

export const AppModule: FoalModule = {
  controllers: [
    view.attachService('/', IndexViewService)
  ],
};
