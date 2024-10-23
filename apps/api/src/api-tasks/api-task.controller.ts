// Dependencies
import { Get, Controller, Post, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('api/v1/tasks')
export class ApiTaskController {
  constructor(
  ) {}

  /** Get all tasks */
  @Get('/list')
  @ApiOperation({summary: 'Get all tasks',})
  async list() {
    return 'hello'
  }

  /** get one tasks */
  @Get('/get/:id')
  @ApiOperation({summary: 'get one tasks',})
  async get() {
    return 'hello'
  }

  /** Create tasks */
  @Post('/create/:id')
  @ApiOperation({summary: 'Create tasks',})
  async create() {
    return 'hello'
  }

  /** Update tasks */
  @Put('/update/:id')
  @ApiOperation({summary: 'Update tasks',})
  async update() {
    return 'hello'
  }

  /** Update tasks */
  @Delete('/delete/:id')
  @ApiOperation({summary: 'Delete tasks',})
  async delete() {
    return 'hello'
  }

}