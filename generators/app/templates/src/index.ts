import { Foal } from '@foal/core';
import * as express from 'express';

import { AppModule } from './app/app.module';

const app = express();

app.use(new Foal(AppModule).expressRouter());

export { app };
