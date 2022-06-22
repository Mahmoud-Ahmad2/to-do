import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { todo } from '../todoData/todoData.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'todo',
      });
      sequelize.addModels([User, todo]);
      return sequelize;
    },
  },
];
