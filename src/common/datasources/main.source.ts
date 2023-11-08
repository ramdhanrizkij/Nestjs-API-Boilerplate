import { DataSource } from 'typeorm';
import { configService } from '../config/config.service';

export const mainSource = new DataSource(configService.getTypeOrmConfig());

mainSource
  .initialize()
  .then(() => {
    console.info('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
