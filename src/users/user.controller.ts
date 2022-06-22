import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
  @Post()
  async insert(@Body() { email, password, name }): Promise<User> {
    return await this.userService.insert(email, password, name);
  }
}
