import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { TaskEntity } from "./task.entity";
import { GenericRepository } from "@app/shared";

@Injectable()
export class TaskRepository extends GenericRepository<TaskEntity> {
  constructor(public readonly dataSource: DataSource) {
    super(TaskEntity, dataSource);
  }
}
