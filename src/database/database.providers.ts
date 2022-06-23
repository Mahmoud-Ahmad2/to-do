import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/user.model';
import { todoData } from '../todoData/todoData.model';
import { DATABASE_PROVIDE, DATABASE_CONFIG } from '../common/constant';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE_CONFIG),
      });
      sequelize.addModels([User, todoData]);
      return sequelize;
    },
  },
];
