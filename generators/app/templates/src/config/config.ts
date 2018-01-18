import { ObjectType } from '@foal/core';
import { logOptions } from '@foal/express';

const env = process.env.NODE_ENV || 'development';

const defaultConfig = {
  db: {
    dbName: process.env.DB_NAME || '<%= dbName %>',
    options: {
      dialect: '<%= database %>',
      host: process.env.RDS_HOSTNAME || process.env.DB_HOST || 'localhost',
    } as ObjectType,
    password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD || '<%= password %>',
    user: process.env.RDS_USERNAME || process.env.DB_USERNAME || '<%= username %>',
  },
  port: process.env.PORT || 3000,
  public: '../public/',
};

if (process.env.RDS_PORT) {
  defaultConfig.db.options.port = process.env.RDS_PORT;
}

const configs = {
  development: {
    app: {
      name: '<%= kebabName %> (dev)'
    },
    errors: {
      logs: '500' as logOptions,
      sendStack: true
    },
    session: {
      resave: false,
      saveUninitialized: false,
      secret: '<%= devSecret1 %>'
        + '<%= devSecret2 %>',
    },
  },
  production: {
    app: {
      name: '<%= kebabName %>'
    },
    errors: {
      logErrors: '500' as logOptions,
      sendStack: false
    },
    session: {
      cookie: {<% if (domain) { %>
        domain: '<%= domain %>',<% } %>
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1 hour
        path: '/',
        secure: true,
      },
      name: 'sessionId',
      resave: false,
      saveUninitialized: false,
      secret: '<%= prodSecret1 %>'
        + '<%= prodSecret2 %>',
    },
  },
  test: {
    app: {
      name: '<%= kebabName %> (test)'
    },
    errors: {
      logErrors: 'none' as logOptions,
      sendStack: true
    },
    session: {
      resave: false,
      saveUninitialized: false,
      secret: '<%= testSecret1 %>'
        + '<%= testSecret2 %>',
    },
  }
};

if (!configs[env]) {
  throw new Error(`NODE_ENV=${env} is incorrect. No configuration found!`);
}

export const config = Object.assign({}, defaultConfig, configs[env]);
