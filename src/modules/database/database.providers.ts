import { DataSource } from 'typeorm';
import 'dotenv/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DBHOST || 'localhost',
        port: +process.env.DBPORT || 3304,
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
