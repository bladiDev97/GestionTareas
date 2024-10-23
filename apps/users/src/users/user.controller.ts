import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { UserMSG } from '@app/shared';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @MessagePattern(UserMSG.GET_ALL)
  list(): string {
    return this.userService.list();
  }

  @MessagePattern(UserMSG.GET_ONE)
  get(): string {
    return this.userService.get();
  }

  @MessagePattern(UserMSG.CREATE)
  create(): string {
    return this.userService.create();
  }

  @MessagePattern(UserMSG.UPDATE)
  update(): string {
    return this.userService.update();
  }

  @MessagePattern(UserMSG.DELETE)
  delete(): string {
    return this.userService.delete();
  }
}
