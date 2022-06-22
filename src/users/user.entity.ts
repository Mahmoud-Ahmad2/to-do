import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
