module.exports = {
  app: {
    name: '<%= kebabName %> (test)'
  },
  csrf: false,
  db: {
    options: {},
    uri: process.env.DB_URI || '<%= uri %>',
  },
  debug: true,
  session: {
    secret: '<%= testSecret1 %>'
      + '<%= testSecret2 %>',
  },
};
