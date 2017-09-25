import { FoalModule } from '@foal/core';
import * as express from 'express';

import { AppModule } from './app/app.module';

const app = express();

app.use(new FoalModule(AppModule).expressRouter());

export { app };
