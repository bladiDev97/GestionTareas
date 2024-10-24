// Dependencies
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get, Controller, Post, Delete, Put, Inject, Param, Body } from '@nestjs/common';

import { CreateUserDto, Queues, UpdateUserDto, UserMSG } from '@app/shared';

@ApiTags('Users')
@Controller('api/v1/users')
export class ApiUserController {
  constructor(
    @Inject(Queues.User) private client: ClientProxy,
  ) {}

  /** Get all users */
  @Get('/list')
  @ApiOperation({summary: 'Get all users',})
  async list() {
    return await lastValueFrom( this.client.send( UserMSG.GET_ALL, '' ) );
  }

  /** get one user */
  @Get('/detail/:id')
  @ApiOperation({summary: 'get one user',})
  async detail(@Param('id') id: number) {
    return await lastValueFrom( this.client.send( UserMSG.GET_ONE, id ) );
  }

  /** Create user */
  @Post('/create')
  @ApiOperation({summary: 'Create user',})
  async create(@Body() dto: CreateUserDto) {
    return await lastValueFrom( this.client.send( UserMSG.CREATE, dto ) );
  }

  /** Update user */
  @Put('/update')
  @ApiOperation({summary: 'Update user',})
  async update(@Body() dto: UpdateUserDto) {
    return await lastValueFrom( this.client.send( UserMSG.UPDATE, dto ) );
  }

  /** Update user */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete user',})
  async delete(@Param('id') id: number) {
    return await lastValueFrom( this.client.send( UserMSG.DELETE, id ) );
  }

}