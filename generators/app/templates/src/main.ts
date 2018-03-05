import { App } from '@foal/core';
import { getMiddlewares } from '@foal/express';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as path from 'path';

import { AppModule } from './app/app.module';
import { config } from './config';

const foal = new App(AppModule);

const app = express();

app.use(logger('[:date] ":method :url HTTP/:http-version" :status - :response-time ms'));
app.use(express.static(path.join(__dirname, config.public)));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(config.session));

app.use(getMiddlewares(foal, { debugMode: config.debugMode }));

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));
