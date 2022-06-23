import database from './configuration.development';
import databaseProduction from './configuration.production';
import databaseTest from './configuration.test';
import * as dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV } = process.env;
let databaseConfig;
switch (NODE_ENV) {
  case 'development':
    databaseConfig = database;
    break;
  case 'production':
    databaseConfig = databaseProduction;
    break;
  case 'test':
    console.log('test');

    databaseConfig = databaseTest;
    break;
  default:
    throw new Error('NODE_ENV is not set');
}
export { databaseConfig };
