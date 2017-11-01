import { Foal } from '@foal/core';
import * as express from 'express';

import { AppModule } from './app/app.module';
import { config } from './config';

const foal = new Foal(AppModule);

const app = express();
app.use(foal.expressRouter());

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));
