import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateTaskDto, TaskMSG, UpdateTaskDto } from '@app/shared';
import { Pagination } from '@app/shared/interfaces/pagination/pagination';
import { PaginationDto } from '@app/shared/interfaces/pagination/pagination.dto';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern(TaskMSG.GET_ALL)
  public async list(dto: PaginationDto) {
    const {page, limit} = dto;
    const data = await this.tasksService.list(page, limit);
    return new Pagination(data);
  }

  @MessagePattern(TaskMSG.GET_ONE)
  public async get(id: number) {
    return this.tasksService.detail(id);
  }

  @MessagePattern(TaskMSG.CREATE)
  public async create(dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @MessagePattern(TaskMSG.UPDATE)
  public async update(dto: UpdateTaskDto) {
    return this.tasksService.update(dto);
  }

  @MessagePattern(TaskMSG.DELETE)
  public async delete(id: number) {
    return this.tasksService.delete(id);
  }
}
