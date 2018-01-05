import { logOptions } from '@foal/express';

const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    app: {
      name: '<%= kebabName %> (dev)'
    },
    db: {
      uri: 'my_uri'
    },
    errors: {
      logs: '500' as logOptions,
      sendStack: true
    },
    port: process.env.PORT || 3000,
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
    db: {
      uri: 'my_uri'
    },
    errors: {
      logErrors: '500' as logOptions,
      sendStack: false
    },
    port: process.env.PORT || 3000,
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
    db: {
      uri: 'my_uri'
    },
    errors: {
      logErrors: 'none' as logOptions,
      sendStack: true
    },
    port: process.env.PORT || 3000,
    session: {
      resave: false,
      saveUninitialized: false,
      secret: '<%= testSecret1 %>'
        + '<%= testSecret2 %>',
    },
  }
};

export const config = configs[env];
