import { ITask, TaskState } from '@app/shared';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity implements ITask {
  @PrimaryGeneratedColumn( { name: 'Task_id' })
  id: number;
  
  @Column({ name: 'Task_description' })
  description: string;

  @Column({ name: 'Task_state', enumName: 'TaskState', type: 'enum', enum: TaskState })
  state: TaskState;

  @Column({ name: 'User_id' })
  userId: number;
}
