import { Foal } from '@foal/core';
import { getCallback } from '@foal/express';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';
import { config } from './config';

const foal = new Foal(AppModule);

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.use(getCallback(foal));

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));