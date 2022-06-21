import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'm1231231',
        database: 'todo',
      });
      sequelize.addModels([User]);
      return sequelize;
    },
  },
];
