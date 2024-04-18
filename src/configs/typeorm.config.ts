import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  logging: true,
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_SENHA,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

