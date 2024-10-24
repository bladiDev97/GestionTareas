import { IUser } from '@app/shared';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tblUser' })
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn( { name: 'User_id' })
  id: number;
  
  @Column({ name: 'User_name' })
  name: string;
  
  @Column({ name: 'User_email', unique: true })
  email: string;
}
