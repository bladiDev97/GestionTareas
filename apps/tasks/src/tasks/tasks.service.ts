import { Inject, Injectable } from '@nestjs/common';

import { CreateTaskDto, UpdateTaskDto } from '@app/shared';

import { TaskEntity } from './task.entity';
import { TaskRepository } from './tasks.repository';


@Injectable()
export class TasksService {
  constructor(@Inject(TaskRepository) public readonly taskRepository: TaskRepository) {}

  public async list(page: number, limit: number): Promise<[TaskEntity[], number]> {
    return await this.taskRepository.listEntitiesAndCount(page, limit);
  }

  public async detail(id: number): Promise<TaskEntity> {
    return await this.taskRepository.findOneEntity(id);
  }

  public async create(dto: CreateTaskDto): Promise<TaskEntity> {
    const entity = this.taskRepository.instanceEntity(dto);
    return await this.taskRepository.saveEntity(entity);
  }

  public async update(dto: UpdateTaskDto): Promise<TaskEntity> {
    const entity = this.taskRepository.instanceEntity(dto);
    return await this.taskRepository.updateEntity(entity);
  }

  public async delete(id: number): Promise<TaskEntity> {
    return await this.taskRepository.deleteEntity(id);
  }
}
