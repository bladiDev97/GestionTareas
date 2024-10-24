import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MessagePattern } from '@nestjs/microservices';
import { TaskMSG } from '@app/shared';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern(TaskMSG.GET_ALL)
  list(): string {
    return this.tasksService.list();
  }

  @MessagePattern(TaskMSG.GET_ONE)
  get(): string {
    return this.tasksService.get();
  }

  @MessagePattern(TaskMSG.CREATE)
  create(): string {
    return this.tasksService.create();
  }

  @MessagePattern(TaskMSG.UPDATE)
  update(): string {
    return this.tasksService.update();
  }

  @MessagePattern(TaskMSG.DELETE)
  delete(): string {
    return this.tasksService.delete();
  }
}
