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
    port: process.env.PORT || 3000,
    errors: {
      logs: '500' as logOptions,
      sendStack: true
    }
  },
  production: {
    app: {
      name: '<%= kebabName %>'
    },
    db: {
      uri: 'my_uri'
    },
    port: process.env.PORT || 3000,
    errors: {
      logErrors: '500' as logOptions,
      sendStack: false
    }
  },
  test: {
    app: {
      name: '<%= kebabName %> (test)'
    },
    db: {
      uri: 'my_uri'
    },
    port: process.env.PORT || 3000,
    errors: {
      logErrors: 'none' as logOptions,
      sendStack: true
    }
  }
};

export const config = configs[env];
