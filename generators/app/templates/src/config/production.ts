import { logOptions } from '@foal/express';

export const config = {
  app: {
    name: '<%= kebabName %>'
  },
  db: {
    options: {},
    uri:  process.env.DB_URI || 'my_uri',
  },
  errors: {
    logs: '500' as logOptions,
    sendStack: false
  },
  port: process.env.PORT || 3000,
  public: '../public/',
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
};
