import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  list(): string {
    return 'call method: list from user service';
  }

  get(): string {
    return 'call method: get from user service';
  }

  create(): string {
    return 'call method: create from user service';
  }

  update(): string {
    return 'call method: update from user service';
  }

  delete(): string {
    return 'call method: delete from user service';
  }
}
