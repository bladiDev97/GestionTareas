// Dependencies
import { Get, Controller, Post, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/v1/users')
export class ApiUserController {
  constructor(
  ) {}

  /** Get all users */
  @Get('/list')
  @ApiOperation({summary: 'Get all users',})
  async list() {
    return 'hello'
  }

  /** get one user */
  @Get('/get/:id')
  @ApiOperation({summary: 'get one user',})
  async get() {
    return 'hello'
  }

  /** Create user */
  @Post('/create/:id')
  @ApiOperation({summary: 'Create user',})
  async create() {
    return 'hello'
  }

  /** Update user */
  @Put('/update/:id')
  @ApiOperation({summary: 'Update user',})
  async update() {
    return 'hello'
  }

  /** Update user */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete user',})
  async delete() {
    return 'hello'
  }

}