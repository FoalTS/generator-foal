module.exports = {
  app: {
    name: '<%= kebabName %>'
  },
  db: {
    options: {},
    uri: process.env.DB_URI || 'my_uri',
  },
  session: {
    cookie: {<% if (domain) { %>
      domain: '<%= domain %>',<% } %>
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
      path: '/',
      secure: false, // It should be true if you are using https.
    },
    name: 'sessionId',
    secret: '<%= prodSecret1 %>'
      + '<%= prodSecret2 %>',
  },
};
