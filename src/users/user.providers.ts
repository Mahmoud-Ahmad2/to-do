import { User } from './user.model';
import { USER_REPOSITORY } from '../common/constant';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
