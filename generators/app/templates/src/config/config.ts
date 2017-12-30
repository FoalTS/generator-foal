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
      logErrors: true,
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
      logErrors: true,
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
      logErrors: false,
      sendStack: true
    }
  }
};

export const config = configs[env];
