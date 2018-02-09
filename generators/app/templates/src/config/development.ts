import { logOptions } from '@foal/express';

export const config = {
  app: {
    name: '<%= kebabName %> (dev)'
  },
  db: {
    options: {},
    uri: process.env.DB_URI || '<%= uri %>',
  },
  errors: {
    logs: '500' as logOptions,
    sendStack: true
  },
  port: process.env.PORT || 3000,
  public: '../public/',
  session: {
    resave: false,
    saveUninitialized: false,
    secret: '<%= devSecret1 %>'
      + '<%= devSecret2 %>',
  },
};
