import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async insert(email: string, password: string, name: string): Promise<User> {
    return await this.userRepository.create({
      email,
      password,
      name,
    });
  }
}
