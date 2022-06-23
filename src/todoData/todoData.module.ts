import { Module } from '@nestjs/common';
import { todoProviders } from './todoData.providers';
import { TodoDataService } from './todoData.service';
import { TodoDataController } from './todoData.controller';
@Module({
  imports: [],
  controllers: [TodoDataController],
  providers: [TodoDataService, ...todoProviders],
})
export class TodoDataModule {}
