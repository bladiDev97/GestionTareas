// Dependencies
import { Get, Controller, Post, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProxyService } from '../utilities/proxy/proxy';
import { lastValueFrom } from 'rxjs';
import { Queues, UserMSG } from '@app/shared';

@ApiTags('Users')
@Controller('api/v1/users')
export class ApiUserController {
  constructor(
    private readonly proxyService: ProxyService,
  ) {}

  private proxy = this.proxyService.clientProxyUser();

  /** Get all users */
  @Get('/list')
  @ApiOperation({summary: 'Get all users',})
  async list() {
    return await lastValueFrom( this.proxy.send( UserMSG.GET_ALL, '' ) );
  }

  /** get one user */
  @Get('/get/:id')
  @ApiOperation({summary: 'get one user',})
  async get() {
    return await lastValueFrom( this.proxy.send( UserMSG.GET_ONE, '' ) );
  }

  /** Create user */
  @Post('/create/:id')
  @ApiOperation({summary: 'Create user',})
  async create() {
    return await lastValueFrom( this.proxy.send( UserMSG.CREATE, '' ) );
  }

  /** Update user */
  @Put('/update/:id')
  @ApiOperation({summary: 'Update user',})
  async update() {
    return await lastValueFrom( this.proxy.send( UserMSG.UPDATE, '' ) );
  }

  /** Update user */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete user',})
  async delete() {
    return await lastValueFrom( this.proxy.send( UserMSG.DELETE, '' ) );
  }

}