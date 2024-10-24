// Dependencies
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get, Controller, Post, Delete, Put, Inject, Body, Param } from '@nestjs/common';

import { CreateTaskDto, Queues, TaskMSG, UpdateTaskDto } from '@app/shared';

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
  @Get('/detail/:id')
  @ApiOperation({summary: 'get one tasks',})
  async get(@Param('id') id: number) {
    return await lastValueFrom( this.client.send( TaskMSG.GET_ONE, id ) );
  }

  /** Create tasks */
  @Post('/create')
  @ApiOperation({summary: 'Create tasks',})
  async create(@Body()dto: CreateTaskDto) {
    return await lastValueFrom( this.client.send( TaskMSG.CREATE, dto ) );
  }

  /** Update tasks */
  @Put('/update')
  @ApiOperation({summary: 'Update tasks',})
  async update(@Body() dto: UpdateTaskDto) {
    return await lastValueFrom( this.client.send( TaskMSG.UPDATE, dto ) );
  }

  /** Update tasks */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete tasks',})
  async delete(@Param('id') id: number) {
    return await lastValueFrom( this.client.send( TaskMSG.DELETE, id ) );
  }

}