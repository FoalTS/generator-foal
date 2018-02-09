/* tslint:disable:no-var-requires */
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
// A a Config interface?
const { config } = fs.existsSync(path.join(__dirname, `${env}.js`)) ? require(`./${env}`) : { config: false };

if (!config) {
  throw new Error(`No configuration file found for environment '${env}'.`);
}

export { config };
