/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';

import { Config } from './config';

const env = process.env.NODE_ENV || 'development';

const mod = fs.existsSync(path.join(__dirname, `${env}.js`)) ? require(`./${env}`) : { config: false };

if (!mod.config) {
  throw new Error(`No configuration file found for environment '${env}'.`);
}

export const config = mod.config as Config;
