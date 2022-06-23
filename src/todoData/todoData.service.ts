import { Injectable, Inject } from '@nestjs/common';
import { todoData } from './todoData.entity';

@Injectable()
export class TodoDataService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly todoRepository: typeof todoData,
  ) {}

  async findAll(id: number): Promise<todoData[]> {
    return await this.todoRepository.findAll({ where: { userId: id } });
  }

  async insert(data: string, userId: number): Promise<todoData> {
    return await this.todoRepository.create({
      data,
      userId,
    });
  }

  async update(id: number, data: string): Promise<todoData[]> {
    await this.todoRepository.update({ data }, { where: { id } });
    return await this.todoRepository.findAll({ where: { id } });
  }

  async delete(id: number): Promise<object> {
    await this.todoRepository.destroy({
      where: { id },
    });
    return {
      message: 'TodoData deleted successfully',
    };
  }

  async findOne(id: number): Promise<todoData> {
    return await this.todoRepository.findOne({ where: { id } });
  }
}
