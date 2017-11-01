const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    app: {
      name: '<%= kebabName %> (dev)'
    },
    port: process.env.PORT || 3000
  },
  production: {
    app: {
      name: '<%= kebabName %>'
    },
    port: process.env.PORT || 3000
  },
  test: {
    app: {
      name: '<%= kebabName %> (test)'
    },
    port: process.env.PORT || 3000
  }
};

export const config = configs[env];
