// Dependencies
import { Get, Controller, Post, Delete, Put, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { Queues, UserMSG } from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';

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
  @Get('/get/:id')
  @ApiOperation({summary: 'get one user',})
  async get() {
    return await lastValueFrom( this.client.send( UserMSG.GET_ONE, '' ) );
  }

  /** Create user */
  @Post('/create/:id')
  @ApiOperation({summary: 'Create user',})
  async create() {
    return await lastValueFrom( this.client.send( UserMSG.CREATE, '' ) );
  }

  /** Update user */
  @Put('/update/:id')
  @ApiOperation({summary: 'Update user',})
  async update() {
    return await lastValueFrom( this.client.send( UserMSG.UPDATE, '' ) );
  }

  /** Update user */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete user',})
  async delete() {
    return await lastValueFrom( this.client.send( UserMSG.DELETE, '' ) );
  }

}