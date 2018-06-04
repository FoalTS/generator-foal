module.exports = {
  app: {
    name: '<%= kebabName %> (dev)'
  },
  csrf: false,
  database: {
    type: '',
    host: '',
    database: '',
    username: '',
    password: ''
  },
  debug: true,
  session: {
    secret: '<%= devSecret1 %>'
      + '<%= devSecret2 %>',
  },
};
