import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['apps/tasks/.env'],
      isGlobal: true,
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
