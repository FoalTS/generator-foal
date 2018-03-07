import { logOptions } from '@foal/express';

import { Config, toNumber } from './config';

export const config: Config = {
  app: {
    name: '<%= kebabName %> (test)'
  },
  csrfProtection: false,
  db: {
    options: {},
    uri: process.env.DB_URI || '<%= uri %>',
  },
  debugMode: true,
  port: toNumber(process.env.PORT || '3000'),
  public: '../public/',
  session: {
    resave: false,
    saveUninitialized: false,
    secret: '<%= testSecret1 %>'
      + '<%= testSecret2 %>',
  },
};
