import { todoData } from './todoData.model';
import { TODO_REPOSITORY } from '../common/constant';

export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useValue: todoData,
  },
];
