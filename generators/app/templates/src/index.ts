import 'source-map-support/register';

import * as http from 'http';

import { createApp, getConfig } from '@foal/core';

import { AppModule } from './app/app.module';

const app = createApp(AppModule);

const httpServer = http.createServer(app);
httpServer.listen(getConfig('base').port || 3000, () => {
  console.log(`Listening on port ${getConfig('base').port || 3000}...`);
});

// module.exports.handler = serverless(app);
