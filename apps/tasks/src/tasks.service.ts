import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  list(): string {
    return 'call method: list from task service';
  }

  get(): string {
    return 'call method: get from task service';
  }

  create(): string {
    return 'call method: create from task service';
  }

  update(): string {
    return 'call method: update from task service';
  }

  delete(): string {
    return 'call method: delete from task service';
  }
}
