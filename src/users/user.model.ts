import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number;

  @Column({ type: 'TEXT', allowNull: false })
  name: string;

  @Column({ type: 'TEXT', allowNull: false })
  email: string;

  @Column({ type: 'TEXT', allowNull: false })
  password: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
