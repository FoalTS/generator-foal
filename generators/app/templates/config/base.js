const { toNumber } = require('@foal/core');

module.exports = {
  csrf: true,
  debug: false,
  port: toNumber(process.env.PORT || '3000'),
  staticUrl: 'public/',
  session: {
    resave: false,
    saveUninitialized: false,
  }
};
