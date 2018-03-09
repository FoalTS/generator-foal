import { App } from '@foal/core';
import { getMiddlewares } from '@foal/express';
import * as bodyParser from 'body-parser';
import * as csurf from 'csurf';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as logger from 'morgan';
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

if (config.csrfProtection) {
  app.use(csurf());
  app.use((req, res, next) => {
    req.csrfToken = req.csrfToken();
    next();
  });
}
app.use((req, res, next) => {
  if (req.body) {
    delete req.body._csrf;
  }
  next();
});
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(403).send('Bad csrf token.');
  } else {
    next(err);
  }
});

app.use(getMiddlewares(foal, { debugMode: config.debugMode }, [
  {
    req: 'csrfToken',
    state: 'csrfToken'
  }
]));

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));
