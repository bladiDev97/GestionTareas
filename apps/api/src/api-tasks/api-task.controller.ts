// Dependencies
import { Get, Controller, Post, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProxyService } from '../utilities/proxy/proxy';
import { lastValueFrom } from 'rxjs';
import { TaskMSG } from '@app/shared';

@ApiTags('Tasks')
@Controller('api/v1/tasks')
export class ApiTaskController {
  constructor(
    private readonly proxyService: ProxyService,
  ) {}

  private proxy = this.proxyService.clientProxyTask();

  /** Get all tasks */
  @Get('/list')
  @ApiOperation({summary: 'Get all tasks',})
  async list() {
    return await lastValueFrom( this.proxy.send( TaskMSG.GET_ALL, '' ) );
  }

  /** get one tasks */
  @Get('/get/:id')
  @ApiOperation({summary: 'get one tasks',})
  async get() {
    return await lastValueFrom( this.proxy.send( TaskMSG.GET_ONE, '' ) );
  }

  /** Create tasks */
  @Post('/create')
  @ApiOperation({summary: 'Create tasks',})
  async create() {
    return await lastValueFrom( this.proxy.send( TaskMSG.CREATE, '' ) );
  }

  /** Update tasks */
  @Put('/update')
  @ApiOperation({summary: 'Update tasks',})
  async update() {
    return await lastValueFrom( this.proxy.send( TaskMSG.UPDATE, '' ) );
  }

  /** Update tasks */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete tasks',})
  async delete() {
    return await lastValueFrom( this.proxy.send( TaskMSG.DELETE, '' ) );
  }

}