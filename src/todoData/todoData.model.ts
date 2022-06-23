import {
  Model,
  Column,
  Table,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

@Table
export class todoData extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: 'INTEGER', allowNull: false })
  userId: number;

  @Column({ type: 'TEXT', allowNull: false })
  data: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
