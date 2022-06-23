import { todoData } from './todoData.entity';

export const todoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useValue: todoData,
  },
];
