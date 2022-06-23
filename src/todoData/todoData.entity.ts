import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.entity';

@Table
export class todoData extends Model {
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  data: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
