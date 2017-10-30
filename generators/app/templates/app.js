const app = require('./dist/index').app;
const config = require('./dist/config').config;

app.listen(config.port, function () {
  console.log('Listening on port ' + config.port + '...');
});
