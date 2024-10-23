import { Module } from '@nestjs/common';
import { ApiUserController } from './api-users/api-user.controller';
import { ApiTaskController } from './api-tasks/api-task.controller';

@Module({
  imports: [],
  controllers: [ApiUserController, ApiTaskController],
  providers: [],
})
export class ApiModule {}
