import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto, UserMSG } from '@app/shared';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @MessagePattern(UserMSG.GET_ALL)
  list() {
    return this.userService.list(1, 10);
  }

  @MessagePattern(UserMSG.GET_ONE)
  get(id: number) {
    return this.userService.detail(id);
  }

  @MessagePattern(UserMSG.CREATE)
  create(dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @MessagePattern(UserMSG.UPDATE)
  update(dto: UpdateUserDto) {
    return this.userService.update(dto);
  }

  @MessagePattern(UserMSG.DELETE)
  delete(id: number) {
    return this.userService.delete(id);
  }
}
