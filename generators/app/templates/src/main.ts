import 'source-map-support/register';

import { Foal } from '@foal/core';
import { getCallback, handleErrors } from '@foal/express';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as path from 'path';

import { AppModule } from './app/app.module';
import { config } from './config';

const foal = new Foal(AppModule);

const app = express();

app.use(express.static(path.join(__dirname, config.public)));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(config.session));

app.use(getCallback(foal));
app.use(handleErrors(config.errors));

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));
