import { Module } from '@nestjs/common';
import { ApiUserController } from './api-users/api-user.controller';
import { ApiTaskController } from './api-tasks/api-task.controller';
import { ProxyService } from './utilities/proxy/proxy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
  ],
  controllers: [ApiUserController, ApiTaskController],
  providers: [ProxyService],
})
export class ApiModule {}
