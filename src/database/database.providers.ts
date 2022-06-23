import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/user.model';
import { todoData } from '../todoData/todoData.model';
import * as dotenv from 'dotenv';
import { DATABASE_PROVIDE, DATABASE_CONFIG } from '../common/constant';

dotenv.config();

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE_CONFIG),
      });
      sequelize.addModels([User, todoData]);
      return sequelize;
    },
  },
];
