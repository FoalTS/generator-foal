module.exports = {
  app: {
    name: '<%= kebabName %> (test)'
  },
  csrf: false,
  debug: true,
  session: {
    secret: '<%= testSecret1 %>'
      + '<%= testSecret2 %>',
  },
};
