import { AbstractUser } from '@foal/core';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends AbstractUser {

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

}
