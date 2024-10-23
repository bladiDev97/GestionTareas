// Dependencies
import { Get, Controller, Post, Delete, Put, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { Queues, TaskMSG } from '@app/shared';
import { ClientProxy } from '@nestjs/microservices';

@ApiTags('Tasks')
@Controller('api/v1/tasks')
export class ApiTaskController {
  constructor(
    @Inject(Queues.Task) private client: ClientProxy,
  ) {}

  /** Get all tasks */
  @Get('/list')
  @ApiOperation({summary: 'Get all tasks',})
  async list() {
    return await lastValueFrom( this.client.send( TaskMSG.GET_ALL, '' ) );
  }

  /** get one tasks */
  @Get('/get/:id')
  @ApiOperation({summary: 'get one tasks',})
  async get() {
    return await lastValueFrom( this.client.send( TaskMSG.GET_ONE, '' ) );
  }

  /** Create tasks */
  @Post('/create')
  @ApiOperation({summary: 'Create tasks',})
  async create() {
    return await lastValueFrom( this.client.send( TaskMSG.CREATE, '' ) );
  }

  /** Update tasks */
  @Put('/update')
  @ApiOperation({summary: 'Update tasks',})
  async update() {
    return await lastValueFrom( this.client.send( TaskMSG.UPDATE, '' ) );
  }

  /** Update tasks */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete tasks',})
  async delete() {
    return await lastValueFrom( this.client.send( TaskMSG.DELETE, '' ) );
  }

}