import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './users/user.module';
import { TodoDataModule } from './todoData/todoData.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from 'config';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TodoDataModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
